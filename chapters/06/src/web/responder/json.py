"""
web.responder.json
Description: output mechanism
"""

import json

class JsonResponder :

    headers   = []
    data      = dict()

    """
    Initializes JSON response header
    """
    def __init__(self) :
        self.addHeader('Content-Type: application/json')

    def addHeader(self, header) :
        self.headers.extend([header])

    def addData(self, key, value) :
        self.data[key] = value

    def addProductKeyTitlePrice(self, key, lookup) :
        temp = []
        for product in lookup :
            prodKey = product.get('productKey')
            title   = '<a href="/chapter_06/details.py?product=' + prodKey + '">' + product.get('title') + '</a>'
            price   = product.get('price')
            qty     = '<input class="qty" name="qty_' + prodKey + '" value="0" type="number" />'
            temp.append([title,price,qty])
        self.data[key] = temp

    def render(self) :
        output = ''
        # add headers
        for item in self.headers :
            output += item + "\r\n"
        output += "\r\n"
        output += json.dumps(self.data)
        return output
