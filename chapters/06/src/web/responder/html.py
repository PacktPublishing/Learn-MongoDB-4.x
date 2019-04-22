"""
web.responder.html
Description: output mechanism
"""

import os

class HtmlResponder :

    html_seed   = None
    headers     = []
    inserts     = []
    max_size    = 16384
    mimeTypes   = dict({'png':'image/png','jpg':'image/jpeg'})
    mimeDefault = 'jpg'

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
    Produces an HTML image tag based on base 64 encoded
    @param string name : name of the element
    @param string mimeType : MIME type of the image (e.g. "png" or "jpg" etc.)
    @param string contents : base 64 encoded string
    @return string output : HTML image tag
    """
    def buildBase64Image(self, name, mimeType, contents) :
        tag = '<img name="'
        tag += name
        tag += '" src="data:'
        if mimeType in self.mimeTypes :
            tag += self.mimeTypes[mimeType]
        else :
            tag += self.mimeTypes[mimeDefault]
        tag += ';base64,'
        tag += contents
        tag += '" />'
        return tag
            
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
        output += '<tr><th>Date</th><td>' + purchInfo.get('dateOfPurchase') + '</td></tr>' + "\n"
        output += '<tr><th>Total</th><td>' + str(purchInfo.get('extendedPrice')) + '</td></tr>' + "\n"
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
            
    """
    Produces HTML for purchase history
    @param iteration of sweetscomplete.entity.purchase.Purchase objects
    @param int pageNum : current page number
    @param string baseUrl : base URL upon which to add page # ref
    @return string output: HTML TABLE
    """
    def buildPurchaseHistory(self, purchHist, pageNum, baseUrl) :
        import locale
        # figure out prev and next page numbers
        nextPage = pageNum + 1
        prevPage = pageNum - 1
        if prevPage < 0 : prevPage = 0

        # begin developing output
        output = ''
        output += '<style>' + "\n"
        output += '.col1 { width:20%;float:left;font-size:10pt; }' + "\n"
        output += '.col2 { width:10%;float:left;font-size:10pt; }' + "\n"
        output += '.col3 { width:70%;float:left;font-size:10pt; }' + "\n"
        output += '.full { width:100%;float:left;font-size:10pt; }' + "\n"
        output += '</style>' + "\n"
        output += '<h3>Purchase History</h3>' + "\n"
        output += '<div class="col1"><b>Date</b></div>'
        output += '<div class="col2"><b>Total</b></div>'
        output += '<div class="col3"><b>Products</b></div>' + "\n"
        
        # loop through iteration of purchases for this customer
        for purchase in purchHist :            
            output += '<div class="col1">' + purchase.get('dateOfPurchase') + '</div>'
            output += '<div class="col2">' + locale.format('%.*f', (2, purchase.get('extendedPrice')), True) + '</div>'
            output += '<div class="col3">'
            output += '<div class="col3"><i>Title</i></div>'
            output += '<div class="col2"><i>Qty</i></div>'
            output += '<div class="col1"><i>Price</i></div>' + "\n"
            
            # processing the embedded list of products purchased
            for key, prodInfo in purchase.get('productsPurchased').items() :
                output += '<div class="col3">' + prodInfo['title'] + '</div>'
                output += '<div class="col2">' + locale.format('%4d', prodInfo['qtyPurchased']) + '</div>'
                output += '<div class="col1">' + locale.format('%.*f', (2, prodInfo['price']), True) + '</div>' + "\n"
            output += '</div>' + "\n"

        # output control
        output += '<div class="full">'
        output += '<a href="' + baseUrl + '?page=' + str(prevPage) + '">Previous</a>'
        output += '&nbsp;&nbsp;|&nbsp;' + str(pageNum) + '&nbsp;|&nbsp;&nbsp;'
        output += '<a href="' + baseUrl + '?page=' + str(nextPage) + '">Next</a>'
        output += '</div>'
        # JavaScript to toggle div
        output += '<script>'
        output += '<!-- javascript to toggle -->'
        output += '</script>' + "\n"
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
                tag    = item[0]
                swap   = item[1]
                if not isinstance(swap, str) :
                    swap = str(swap)
                output = output.replace(tag, swap)
        # done
        return output
