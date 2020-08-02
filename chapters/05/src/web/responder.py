"""
web.responder
Description: output mechanism
"""

import os

class Html :

    html_seed = None
    headers   = []
    inserts   = []
    max_size  = 16384
        
    """
    @param string html_seed : filename of HTML file which seeds the output
    """
    def __init__(self, html_seed) :
        self.html_seed = html_seed
        self.addHeader('Content-Type: text/html')

    def addHeader(self, header) :
        self.headers.extend([header]) 
        
    def addInsert(self, key, value) :
        self.inserts.append([key, value])

    """
    Produces an HTML SELECT dropdown
    @param string name : name of the element
    @param dict dropdown : list of key:value pairs to add to the SELECT
    @return string output
    """
    def buildSelect(self, name, dropdown) :
        output = '<select name="' + name + '">' + "\n"
        for key, value in dropdown.items() :
            output += '<option value="' + key + '">' + value + '</option>' + "\n"
        output += '</select>' + "\n"
        return output
            
    """
    Produces HTML for last purchase
    @param sweetscomplete.entity.purchase.Purchase object
    @return string output: HTML TABLE
    """
    def buildLastPurchase(self, purchInfo) :
        output = ''
        output += '<h3>Purchase Info</h3>' + "\n"
        output += '<table width="50%">' + "\n" 
        output += '<tr><th>Date</th><td><td>' + purchInfo.get('dateOfPurchase') + '</td></tr>' + "\n"
        output += '<tr><th>Total</th><td><td>' + str(purchInfo.get('extendedPrice')) + '</td></tr>' + "\n"
        output += '</table>' + "\n"
        output += '<h3>Product(s)</h3>' + "\n"
        output += '<table width="60%">' + "\n"
        output += '<tr><td><i>Title</i></td><td><i>Quantity</i></td><td><i>Price</i></td></tr>' + "\n"
        for key, prodInfo in purchInfo.get('productsPurchased').items() :
            output += '<tr>'
            output += '<td>' + prodInfo['title'] + '</td>'
            output += '<td>' + str(prodInfo['qtyPurchased']) + '</td>'
            output += '<td>' + str(prodInfo['price']) + '</td>'
            output += '</tr>' + "\n"
        output += '</table>' + "\n"
        return output
            
    def render(self) :
        output = ''
        # add headers
        for item in self.headers :
            output += item + "\r\n"
        output += "\r\n"
        # add html template
        if not os.path.exists(self.html_seed) :
            output += "Error: HTML template not found"
        else :
            f = open(self.html_seed, 'r')
            output += f.read(self.max_size)
            f.close()
            # deal with inserts
            for item in self.inserts :
                output = output.replace(item[0], item[1])
        # done
        return output
