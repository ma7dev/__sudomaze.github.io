import requests
import yaml
import json
import time

TARGET_URL = "https://sudomaze.dev"
BASE_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
PATHS = ['/']#,'/about','/notes','/projects','/cv','/site']
CATEGORIES = ["accessibility", "best-practices", "performance", "pwa", "seo"]

# get the dynamic pages
# r_urls = json.loads(requests.get("https://sudomaze.dev/search.json").text)
# for i in range(len(r_urls)):
#     PATHS.append(r_urls[i]['url'])
sstart = time.time()
for path in PATHS:
    start = time.time()
    print(f'PATH: {path}')
    api_key = yaml.load(open('secret.yml'), Loader=yaml.FullLoader)['api']
    total_url_desktop = f'{BASE_URL}?url={TARGET_URL}{path}&key={api_key}&category={"&category=".join(CATEGORIES)}&strategy=desktop'
    total_url_mobile = f'{BASE_URL}?url={TARGET_URL}{path}&key={api_key}&category={"&category=".join(CATEGORIES)}&strategy=mobile'
    data_desktop = json.loads(requests.get(total_url_desktop).text)
    data_mobile = json.loads(requests.get(total_url_mobile).text)
    for category in data_desktop['lighthouseResult']['categories']:
        print(f"(DESKTOP) {category}: {data_desktop['lighthouseResult']['categories'][category]['score']}")
        print(f"(MOBILE) {category}: {data_mobile['lighthouseResult']['categories'][category]['score']}")
    end = time.time() - start
    print(f'TIME: {end}')
end = time.time() - sstart
print(end)