import os
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto(f"file://{os.path.abspath('index.html')}")
    page.wait_for_timeout(2000)
    page.screenshot(path="jules-scratch/verification/initial_view.png")
    page.click('[data-action="toggle-details"]')
    page.wait_for_timeout(500)
    page.screenshot(path="jules-scratch/verification/expanded_view.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
