from typing import List, Tuple
import requests


def get_user_rating(handle: str) -> Tuple[List[str], List[int]]:
    """Fetch rated contest names and new ratings for a Codeforces user.

    The function queries the Codeforces API for the rating history of the
    provided handle. It returns two lists: the names of contests the user has
    participated in and the corresponding new ratings after each contest. If
    the user does not exist, has no rated contests, or an error occurs while
    calling the API, two empty lists are returned.

    Args:
        handle: Codeforces handle of the user.

    Returns:
        A tuple containing a list of contest names and a list of new ratings.
    """
    url = f"https://codeforces.com/api/user.rating?handle={handle}"
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
    except requests.RequestException as exc:
        print(f"Failed to fetch rating data: {exc}")
        return [], []

    try:
        data = response.json()
    except ValueError:
        print("Failed to parse API response as JSON.")
        return [], []

    if data.get("status") != "OK":
        print(f"API error: {data.get('comment', 'Unknown error')}")
        return [], []

    result = data.get("result", [])
    if not result:
        # User has no rating history or API returned empty result
        return [], []

    contest_names = [entry.get("contestName", "") for entry in result]
    new_ratings = [int(entry.get("newRating", 0)) for entry in result]
    return contest_names, new_ratings
