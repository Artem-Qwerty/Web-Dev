import { Injectable } from '@angular/core';
import { Product } from '../product.interface';

@Injectable({
  providedIn: 'root' // Ensures this service is globally available
})
export class ProductService {

  private productsList: Product[] = [
    {

      "name": "Смартфон Apple iPhone 13 128Gb черный",
      "description": "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.",
      "image": './assets/iphone13.jpg',
      "rating": 5,
      "kaspiLink": "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
      "category": "Smartphone"
    },
    {
      "name": "Смартфон Apple iPhone 16 Pro Max 256Gb черный",
      "description": "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе.",
      "image": './assets/iphone16.jpg',
      "rating": 5,
      "kaspiLink": "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000",
      "category": "Smartphone"
    },
    {
      "name": "Фотокамера Canon EOS 4000D 18-55 III черный",
      "description":
        "Материал корпуса: пластик.\n" +
        "Дополнительные возможности:крепление для штатива, дистанционное управление, датчик ориентации, управление с компьютера\n" +
        "Комплектация: объектив, наглазник серии Ef, ремень для камеры, аккумулятор LP-E10, зарядное устройство LC-E10E, кабель питания для зарядного устройства\n" ,
      "image": './assets/canon.jpg',
      "rating": 5,
      "kaspiLink": "https://kaspi.kz/shop/p/canon-eos-4000d-18-55-iii-chernyi-2240150/?c=750000000",
      "category": "Camera"
    },
    {
      "name": "Видеоигра The Witcher 3 Game Of The Year Edition RUS PS4",
      "description": "«Ведьма́к 3: Дикая Охота» (пол. Wiedźmin 3: Dziki Gon, англ. The Witcher 3: Wild Hunt) — компьютерная игра в жанре action/RPG, разработанная и изданная польской студией CD Projekt RED. Изначально игра была выпущена 19 мая 2015 года на Windows, PlayStation 4 и Xbox One, затем 15 октября 2019 года на Nintendo Switch, а 14 декабря 2022 года — на PlayStation 5 и Xbox Series X/S. Является продолжением игр «Ведьмак» (2007) и «Ведьмак 2: Убийцы королей» (2011).",
      "image": './assets/witcher.jpg',
      "rating": 5,
      "kaspiLink": "https://kaspi.kz/shop/p/the-witcher-3-game-of-the-year-edition-rus-ps4-101549198/?c=750000000",
      "category": "Games"
    },
    {
      "name": "Электрогитара Fender AMERICAN VINTAGE II 1957 STRATOCASTER",
      "description": "\n" +
        "Материал грифа: клен\n" +
        "Тип бриджа: тремоло\n" +
        "Количество ладов: 21\n" +
        "Схема звукоснимателей: S-S-S\n" +
        "Регуляторов громкости: 1\n" +
        "Регуляторов тона: 2",
      "image": './assets/fender.jpg',
      "rating": 0,
      "kaspiLink": "https://kaspi.kz/shop/p/fender-american-vintage-ii-1957-stratocaster-011-0232-803-chernyi-korichnevyi-113218744/?c=750000000",
      "category": "Music"
    },
    {
      "name": "Наушники Apple AirPods 3 with Lightning Charging Case белый",
      "description": "Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.",
      "image": './assets/airpods3.jpg',
      "rating": 5,
      "kaspiLink": "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000",
      "category": "Accesories"

    },
    {
      "name": "Яндекс Станция Лайт 2 ",
      "description": "Диапазон воспроизводимых частот: 130–20 000 Гц\n" +
        "Суммарная мощность: 6.0 Вт\n" +
        "Управление умным домом: Да\n" +
        "Голосовой помощник: Алиса\n" +
        "Цвет: фиолетовый",
      "image": './assets/alisa2.jpg',
      "rating": 5,
      "kaspiLink": "https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000",
      "category": "Devices"
    },
    {
      "name": "Телевизор Xiaomi A Pro 2025",
      "description": "Телевизоры Xiaomi серии A Pro 2025, оснащенные передовой технологией отображения на квантовых точках, оживляют цвета. Благодаря широкому охвату цветовой гаммы и дисплею с 1 миллиардом цветов вы можете наслаждаться потрясающим качеством изображения, не выходя из своей гостиной.",
      "image": './assets/xiaomitv.jpg',
      "rating": 5,
      "kaspiLink": "https://kaspi.kz/shop/p/xiaomi-a-pro-2025-l55ma-sru-140-sm-chernyi-120147252/?c=750000000",
      "category": "Monitor"
    },
    {
      "name": "Игровой контроллер Sony PS5 DualSense",
      "description": "Новый уровень ощущений Беспроводной контроллер DualSense для PS5 оснащен реалистичной тактильной отдачей, динамическими адаптивными триггерами и встроенным микрофоном. Все это в сочетании с оригинальным дизайном.",
      "image": './assets/dualsense.jpg',
      "rating": 5,
      "kaspiLink": "https://kaspi.kz/shop/p/sony-ps5-dualsense-volcanic-krasnyi-114796546/?c=750000000",
      "category": "Accesories"
    },
    {
      "name": "Монитор Samsung Odyssey G5",
      "description": "Насладиться качественным изображением можно, используя монитор SAMSUNG LC34G55TWWIXCI диагональю 34 дюйма. Данная модель обладает разрешением 3440x1440 пикселей. Стоит отметить, что частота обновления достигает 165 Гц, это исключает подвисание и задержку кадра даже во время динамичных сцен. Матрица VA дополнена функцией защиты зрения, чтобы обеспечить пользователю максимальный комфорт при продолжительной эксплуатации.",
      "image": './assets/monitorg5.jpg',
      "rating": 5,
      "kaspiLink": "https://kaspi.kz/shop/p/samsung-odyssey-g5-c34g55twwi-lc34g55twwixci-chernyi-101041173/?c=750000000",
      "category": "Monitor"
    }
  ];

  // Function to get unique categories
  getCategories(): string[] {
    return Array.from(new Set(this.productsList.map(product => product.category)));
  }

  // Function to get all products
  getProducts(): Product[] {
    return this.productsList;
  }
}
