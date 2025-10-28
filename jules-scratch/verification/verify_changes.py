
import os
from playwright.sync_api import sync_playwright

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get the absolute path to the index.html file
        file_path = os.path.abspath('index.html')
        page.goto(f'file://{file_path}')

        # Wait for the JavaScript to execute and render the button
        page.wait_for_function("document.querySelector('[data-action=\"toggle-details\"]')")

        # Verify the two-column layout in the "Basic Information" section
        page.click('[data-action="toggle-details"]')
        page.screenshot(path='jules-scratch/verification/details_verification.png')

        # Verify the updated risk table and attachments panel
        page.click('[data-action="set-risk-tab"][data-tab="assessment"]')
        page.click('[data-action="open-panel"][data-panel="attachments"]')
        page.screenshot(path='jules-scratch/verification/assessment_verification.png')

        browser.close()

if __name__ == "__main__":
    run_verification()
