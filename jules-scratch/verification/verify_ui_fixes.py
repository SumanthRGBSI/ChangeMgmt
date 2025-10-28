
from playwright.sync_api import sync_playwright
import os
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get the absolute path to the HTML file
        file_path = os.path.abspath('index.html')

        # Go to the local HTML file
        page.goto(f'file://{file_path}')

        # Verify color-coding on risk badges
        page.wait_for_selector('.bg-yellow-100')
        page.wait_for_selector('.bg-green-100')

        # Verify sliding panel functionality
        page.click('[data-action="toggle-conversation"]')

        # Add a small delay to allow the animation to complete
        time.sleep(1)

        # Take a screenshot
        page.screenshot(path='jules-scratch/verification/verification.png')

        browser.close()

if __name__ == '__main__':
    run()
