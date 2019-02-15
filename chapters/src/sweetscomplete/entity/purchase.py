# sweetscomplete.entity.purchase

class Purchase :
    transactionId   = ""
    customer_info   = None
    product_info    = None
    purchase_info   = None
    def __init__(self, transactionId, customer_info, product_info, purchase_info) :
        self.transactionId   = transactionId
        self.customer_info   = customer_info
        self.product_info    = product_info
        self.purchase_info   = purchase_info

class CustomerInfo :
    primary_contact_info = None
    address              = None
    def __init__(self, primary_contact_info, address) :
        self.primary_contact_info = primary_contact_info
        self.address              = address

class ProductInfo : 
    main_product_info = None
    def __init__(self, main_product_info) :
        self.main_product_info = main_product_info

class PurchaseInfo :
    dateOfPurchase    = ""
    quantityPurchased = 0
    extendedPrice     = 0.00
    def __init__(self, dateOfPurchase, quantityPurchased, extendedPrice) :
        self.dateOfPurchase    = dateOfPurchase
        self.quantityPurchased = quantityPurchased
        self.extendedPrice     = extendedPrice
