
import os
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Get the absolute path to the index.html file
    current_dir = os.getcwd()
    file_path = f"file://{current_dir}/index.html"

    page.goto(file_path)

    # A more robust wait: wait for the JS to populate the root div.
    page.wait_for_function("() => document.getElementById('root').innerHTML.trim() !== ''")

    # Now, explicitly wait for the h1 to be visible
    heading = page.locator('h1:has-text("Update Main Housing Assembly - V2")')
    expect(heading).to_be_visible()

    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
