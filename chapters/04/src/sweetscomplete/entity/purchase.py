# sweetscomplete.entity.purchase

class Purchase :
    transactionId      = None
    dateOfPurchase     = None
    extendedPrice      = None
    customerInfo       = None
    productsPurchased  = None
    def __init__(self, transId, cust_info, date_of_purch, ext_price, prods_purchased) :
        self.transactionId      = transId
        self.customerInfo       = cust_info
        self.dateOfPurchase     = date_of_purch
        self.extendedPrice      = ext_price
        self.productsPurchased  = prods_purchased

class CustomerInfo :
    customerKey        = None
    PrimaryContactInfo = None
    Address            = None
    def __init__(self, key, primary_contact_info, address_info) :
        self.customerKey        = key
        self.PrimaryContactInfo = primary_contact_info
        self.Address            = address_info

class ProdsPurchased :
    productKey   = None
    qtyPurchased = None
    productInfo  = None
    def __init__(self, key, qty, product_info) :
        self.productKey   = key
        self.qtyPurchased = qty
        self.productInfo  = product_info
        
