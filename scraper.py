import requests
import xml.etree.ElementTree as ET

def get_headlines():
    url = 'http://feeds.bbci.co.uk/news/world/rss.xml'
    response = requests.get(url)
    
    if response.status_code != 200:
        return []

    root = ET.fromstring(response.content)
    items = root.findall('.//item')

    headlines = []
    for item in items[:8]:
        title = item.find('title').text
        link = item.find('link').text
        media = item.find('{http://search.yahoo.com/mrss/}thumbnail')
        image_url = media.get('url') if media is not None else "https://via.placeholder.com/150"

        headlines.append({
            'title': title,
            'link': link,
            'image': image_url
        })

    return headlines
