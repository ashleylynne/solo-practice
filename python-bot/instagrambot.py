from selenium import webdriver
from selenium.webdriver.common.keys import keys
import time
import random

class InstagramBot:

    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.driver = webdriver.Chrome()

# login function
    def login(self):
        driver. self.driver
        driver.get("https://www.instagram.com/")
        time.sleep(5)
        user_name_elem = driver.find_element_by_xpath("//*[@id="loginForm"]/div/div[1]/div/label/input")
        user_name_elem.clear()
        user_name_elem.send_keys(self.username)
        pass_word_elem = driver.find_element_by_xpath("//*[@id="loginForm"]/div/div[2]/div/label/input")
        user_name_elem.clear()
        user_name_elem.send_keys(self.password)
        user_name_elem = driver.find_element_by_xpath("//*[@id="loginForm"]/div/div[3]")
        login_button.click()
        time.sleep(5)
        # NOTE: last xpath is the login button
# like function
    def like_photo(self, hashtag):
        driver. self.driver
        driver.get("https://www.instagram.com/explore/tags/" + hashtag + "/")

        pic_href []
        for i in range(1,7)
            try
                driver.execute_script("window.scrollTo(0, docoument.body.scrollHeight);")
                time.sleep(5)
                # gathering hashtags
                hrefs_in_view = driver.find_element_by_tag_name('a')
                # finding relevent hrefs
                hrefs_in_view = [elem.get_attribute('href') for elem in href_in_view
                    if '.com/p/' in elem.get_attribute('href')]
                # building list of unique photos
                [pic.append(href) for href in hrefs_in_view if href not in pic_hrefs]

            except Exception
                continue

            # liking photos
            unique_photos = len(pic_hrefs)
            for pic_href in pic_hrefs:
                driver.get(pic_hrefs)
                time.sleep(5)
                driver.execute_script("window.scrollTo(0, docoument.body.scrollHeight);")
                try:
                    time.sleep(random.radint(2, 4))
                    like_button = lambda: driver.find_element_by_xpath('//span[aria-label="Like"]').click()

                    for second in reversed(0, random.radint(18, 28))
                        print_same_line("#" + hashtag + ': unique photos left:' '+ str(unique_photos)')]
                        + " | sleeping" + str(second)

                except Exception as e:
                    time.sleep(2)
                unique_photos -= 1


username = "USERNAME"
password = "PASSWORD"

ig = InstagramBot('', '')
ig.login()

hashtag = ['blackgirlmagic']

# NOTE: only use this program for dummy accounts
