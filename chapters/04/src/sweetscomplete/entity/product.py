# sweetscomplete/entity/product

class Product:
    productKey      = ""
    productPhoto    = ""
    MainProductInfo = None
    InventoryInfo   = None
    def __init__(self, productKey, productPhoto, main_product_info, inventory_info) :
        self.productKey      = productKey
        self.productPhoto    = productPhoto
        self.MainProductInfo = main_product_info
        self.InventoryInfo   = inventory_info

class MainProductInfo:
    skuNumber    = 0
    category     = ""
    title        = ""
    description  = ""
    price        = 0.00
    def __init__(self, skuNumber,category,title,description,price) :
        self.skuNumber   = skuNumber
        self.category    = category
        self.title       = title
        self.description = description
        self.price       = price

class InventoryInfo:
    unit        = ""
    costPerUnit = 0.00
    unitsOnHand = 0.00
    def __init__(self, unit, costPerUnit, unitsOnHand) :
        self.unit        = unit
        self.costPerUnit = costPerUnit
        self.unitsOnHand = unitsOnHand
