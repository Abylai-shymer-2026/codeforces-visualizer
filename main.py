"""Entry point for CLI testing.

This module allows quick manual tests of the project logic from the
command line. It will later integrate calls to the API handler,
analysis routines, and visualizations.
"""

from api_handler import fetch_rating_history
from analyzer import analyze_by_tag
from visualizer import plot_rating_history


def main() -> None:
    """Run a simple CLI session."""
    handle = input("Enter Codeforces handle: ").strip()
    # TODO: integrate project components
    print(f"Received handle: {handle}")


if __name__ == "__main__":
    main()
