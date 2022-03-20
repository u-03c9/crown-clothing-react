
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


def get_image_link(image, folder='hats'):
    return u'https://firebasestorage.googleapis.com/v0/b/crown-clothing-u03c9.appspot.com/o/images%2F{0}%2F{1}?alt=media'.format(folder, image)


data_hats = {
    u'title': u'Hats',
    u'items': [
        {
            u'id': 1,
            u'name': u"Brown Brim",
              u'imageUrl': get_image_link('brown-brim.webp'),
              u'price': 25,
        },
        {
            u'id': 2,
            u'name': u"Blue Beanie",
            u'imageUrl': get_image_link('blue-beanie.webp'),
            u'price': 18,
        },
        {
            u'id': 3,
            u'name': u"Brown Cowboy",
            u'imageUrl': get_image_link('brown-cowboy.webp'),
            u'price': 35,
        },
        {
            u'id': 4,
            u'name': u"Grey Brim",
            u'imageUrl': get_image_link('grey-brim.webp'),
            u'price': 25,
        },
        {
            u'id': 5,
            u'name': u"Green Beanie",
            u'imageUrl': get_image_link('green-beanie.webp'),
            u'price': 18,
        },
        {
            u'id': 6,
            u'name': u"Palm Tree Cap",
            u'imageUrl': get_image_link('palm-tree-cap.webp'),
            u'price': 14,
        },
        {
            u'id': 7,
            u'name': u"Red Beanie",
            u'imageUrl': get_image_link('red-beanie.webp'),
            u'price': 18,
        },
        {
            u'id': 8,
            u'name': u"Wolf Cap",
            u'imageUrl': get_image_link('wolf-cap.webp'),
            u'price': 14,
        },
        {
            u'id': 9,
            u'name': u"Blue Snapback",
            u'imageUrl': get_image_link('blue-snapback.webp'),
            u'price': 16,
        },
    ]
}

data_sneakers = {
    u'title': u'Sneakers',
    u'items': [
        {
            u'id': 10,
            u'name': u"Adidas NMD",
            u'imageUrl': get_image_link('adidas-nmd.webp', 'sneakers'),
            u'price': 220,
        },
        {
            u'id': 11,
            u'name': u"Adidas Yeezy",
            u'imageUrl': get_image_link('yeezy.webp', 'sneakers'),
            u'price': 280,
        },
        {
            u'id': 12,
            u'name': u"Black Converse",
            u'imageUrl': get_image_link('black-converse.webp', 'sneakers'),
            u'price': 110,
        },
        {
            u'id': 13,
            u'name': u"Nike White AirForce",
            u'imageUrl': get_image_link('white-nike-high-tops.webp', 'sneakers'),
            u'price': 160,
        },
        {
            u'id': 14,
            u'name': u"Nike Red High Tops",
            u'imageUrl': get_image_link('nikes-red.webp', 'sneakers'),
            u'price': 160,
        },
        {
            u'id': 15,
            u'name': u"Nike Brown High Tops",
            u'imageUrl': get_image_link('nike-brown.webp', 'sneakers'),
            u'price': 160,
        },
        {
            u'id': 16,
            u'name': u"Air Jordan Limited",
            u'imageUrl': get_image_link('nike-funky.webp', 'sneakers'),
            u'price': 190,
        },
        {
            u'id': 17,
            u'name': u"Timberlands",
            u'imageUrl': get_image_link('timberlands.webp', 'sneakers'),
            u'price': 200,
        },
    ]
}
data_jackets = {
    u'title': u'Jackets',
    u'items': [
        {
            u'id': 18,
            u'name': u"Black Jean Shearling",
            u'imageUrl': get_image_link('black-shearling.webp', 'jackets'),
            u'price': 125,
        },
        {
            u'id': 19,
            u'name': u"Blue Jean Jacket",
            u'imageUrl': get_image_link('blue-jean-jacket.webp', 'jackets'),
            u'price': 90,
        },
        {
            u'id': 20,
            u'name': u"Grey Jean Jacket",
            u'imageUrl': get_image_link('grey-jean-jacket.webp', 'jackets'),
            u'price': 90,
        },
        {
            u'id': 21,
            u'name': u"Brown Shearling",
            u'imageUrl': get_image_link('brown-shearling.webp', 'jackets'),
            u'price': 165,
        },
        {
            u'id': 22,
            u'name': u"Tan Trench",
            u'imageUrl': get_image_link('brown-trench.webp', 'jackets'),
            u'price': 185,
        },
    ]
}

data_womens = {
    u'title': u'Womens',
    u'items': [
        {
            u'id': 23,
            u'name': u"Blue Tanktop",
            u'imageUrl': get_image_link('blue-tank.webp', 'womens'),
            u'price': 25,
        },
        {
            u'id': 24,
            u'name': u"Floral Blouse",
            u'imageUrl': get_image_link('floral-blouse.webp', 'womens'),
            u'price': 20,
        },
        {
            u'id': 25,
            u'name': u"Floral Dress",
            u'imageUrl': get_image_link('floral-skirt.webp', 'womens'),
            u'price': 80,
        },
        {
            u'id': 26,
            u'name': u"Red Dots Dress",
            u'imageUrl': get_image_link('red-polka-dot-dress.webp', 'womens'),
            u'price': 80,
        },
        {
            u'id': 27,
            u'name': u"Striped Sweater",
            u'imageUrl': get_image_link('striped-sweater.webp', 'womens'),
            u'price': 45,
        },
        {
            u'id': 28,
            u'name': u"Yellow Track Suit",
            u'imageUrl': get_image_link('yellow-track-suit.webp', 'womens'),
            u'price': 135,
        },
        {
            u'id': 29,
            u'name': u"White Blouse",
            u'imageUrl': get_image_link('white-vest.webp', 'womens'),
            u'price': 20,
        },
    ]
}

data_mens = {
    u'title': u'Mens',
    u'items': [
        {
            u'id': 30,
            u'name': u"Camo Down Vest",
            u'imageUrl': get_image_link('camo-vest.webp', 'mens'),
            u'price': 325,
        },
        {
            u'id': 31,
            u'name': u"Floral T-shirt",
            u'imageUrl': get_image_link('floral-shirt.webp', 'mens'),
            u'price': 20,
        },
        {
            u'id': 32,
            u'name': u"Black & White Longsleeve",
            u'imageUrl': get_image_link('long-sleeve.webp', 'mens'),
            u'price': 25,
        },
        {
            u'id': 33,
            u'name': u"Pink T-shirt",
            u'imageUrl': get_image_link('pink-shirt.webp', 'mens'),
            u'price': 25,
        },
        {
            u'id': 34,
            u'name': u"Jean Long Sleeve",
            u'imageUrl': get_image_link('roll-up-jean-shirt.webp', 'mens'),
            u'price': 40,
        },
        {
            u'id': 35,
            u'name': u"Burgundy T-shirt",
            u'imageUrl': get_image_link('polka-dot-shirt.webp', 'mens'),
            u'price': 25,
        },
    ]
}


def main():
    cred = credentials.Certificate("./serviceAccountKey.json")
    firebase_admin.initialize_app(cred)
    db = firestore.client()

    db.collection(u'collections').document(
        'AzMW8i5yrwi7aVKOMYBX').set(data_hats)
    db.collection(u'collections').document(
        'Bd9ppJ7LtTSeih638Ejm').set(data_sneakers)
    db.collection(u'collections').document(
        'CVC2ik8NDacEUYNKUyoW').set(data_jackets)
    db.collection(u'collections').document(
        'DMGDS63LqxgOKZfh1AHW').set(data_womens)
    db.collection(u'collections').document(
        'EoWsmT9U0LBzqdYPrjer').set(data_mens)


if __name__ == "__main__":
    main()
