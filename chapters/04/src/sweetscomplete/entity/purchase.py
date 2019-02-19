# sweetscomplete.entity.purchase

class Purchase :
    transactionId   = ""
    CustomerInfo    = None
    MainProductInfo = None
    PurchaseInfo    = None
    def __init__(self, transactionId, customer_info, product_info, purchase_info) :
        self.transactionId   = transactionId
        self.CustomerInfo    = customer_info
        self.MainProductInfo = product_info
        self.PurchaseInfo    = purchase_info

class CustomerInfo :
    PrimaryContactInfo = None
    Address            = None
    def __init__(self, primary_contact_info, address) :
        self.PrimaryContactInfo = primary_contact_info
        self.Address            = address

class PurchaseInfo :
    dateOfPurchase    = ""
    quantityPurchased = 0
    extendedPrice     = 0.00
    def __init__(self, dateOfPurchase, quantityPurchased, extendedPrice) :
        self.dateOfPurchase    = dateOfPurchase
        self.quantityPurchased = quantityPurchased
        self.extendedPrice     = extendedPrice
