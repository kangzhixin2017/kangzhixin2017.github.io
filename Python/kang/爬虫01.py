# coding:utf-8
import urllib.request
import re
import ssl
try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    # Legacy Python that doesn't verify HTTPS certificates by default
    pass
else:
    # Handle target environment that doesn't support HTTPS verification
    ssl._create_default_https_context = _create_unverified_https_context
# coding:utf-8
def get_html(url):
    page = urllib.request.urlopen(url)
    html_code = page.read()
    return html_code
def get_image(html_code):
    reg = r'src="(.+?\.jpg)" width'
    reg_img = re.compile(reg)
    html_code = html_code.decode('utf-8')  # python3
    img_list = reg_img.findall(html_code)
    x = 0
    for img in img_list:
        urllib.request.urlretrieve(img, r'img/%s.jpg' % x)
        x += 1
print (u'请输入url:'),
url = input()
if url:
    pass
else:
    url = 'http://tieba.baidu.com/p/1753935195'
html_code = get_html(url)
get_image(html_code)