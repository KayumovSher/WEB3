// src/App.js
import React from 'react';
import Navbar from './components/Navbar';

// Images
// Videosteni
import videostena1 from "./components/images/products/Videostena/videostena1.jpg"
import videostena2 from "./components/images/products/Videostena/videostena2.jpg"

// Interactiv Panel
import InteractivPanel1 from "./components/images/products/InteraktivPanel/InteraktivPanel1.jpg"
import InteractivPanel2 from "./components/images/products/InteraktivPanel/InteraktivPanel2.jpg"
import InteractivPanel3 from "./components/images/products/InteraktivPanel/InteraktivPanel3.jpg"

// Infokiosk
import Infokiosk1 from "./components/images/products/Infokiosk/Infokiosk1.jpg"
import Infokiosk2 from "./components/images/products/Infokiosk/Infokiosk2.jpg"
import Infokiosk3 from "./components/images/products/Infokiosk/Infokiosk3.jpg"
import Infokiosk4 from "./components/images/products/Infokiosk/Infokiosk4.jpg"
import Infokiosk5 from "./components/images/products/Infokiosk/Infokiosk5.jpg"
import Infokiosk6 from "./components/images/products/Infokiosk/Infokiosk6.jpg"

// Kamera
import Kamera1 from "./components/images/products/Kamera/kamera.jpg"
import Kamera2 from "./components/images/products/Kamera/kamera2.jpg"
import Kamera3 from "./components/images/products/Kamera/kamera3.jpg"
import Kamera4 from "./components/images/products/Kamera/kamera4.jpg"
import Kamera5 from "./components/images/products/Kamera/kamera5.jpg"
import Kamera6 from "./components/images/products/Kamera/kamera6.jpg"
import Kamera7 from "./components/images/products/Kamera/kamera7.jpg"
import Kamera8 from "./components/images/products/Kamera/kamera8.jpg"
import Kamera9 from "./components/images/products/Kamera/kamera9.jpg"
import Kamera10 from "./components/images/products/Kamera/kamera10.jpg"

// Interactiv Panel
import mobilstoy1 from "./components/images/products/MobilniyStoyka/mobilstoy1.jpg"
import mobilstoy2 from "./components/images/products/MobilniyStoyka/mobilstoy2.jpg"
import mobilstoy3 from "./components/images/products/MobilniyStoyka/mobilstoy3.jpg"
import mobilstoy4 from "./components/images/products/MobilniyStoyka/mobilstoy4.jpg"

// Monoblok
import monoblok from "./components/images/products/Monoblok/monoblok1.jpg"

// Spikerfon
import Spikerfon1 from "./components/images/products/Spikerfon/spikerfon1.jpg"
import Spikerfon2 from "./components/images/products/Spikerfon/spikerfon2.jpg"
import Spikerfon3 from "./components/images/products/Spikerfon/spikerfon3.jpg"
import Spikerfon4 from "./components/images/products/Spikerfon/spikerfon4.jpg"
import Spikerfon5 from "./components/images/products/Spikerfon/spikerfon5.jpg"
import Spikerfon6 from "./components/images/products/Spikerfon/spikerfon6.jpg"
import Spikerfon7 from "./components/images/products/Spikerfon/spikerfon7.jpg"
import Spikerfon8 from "./components/images/products/Spikerfon/spikerfon8.jpg"
import Spikerfon9 from "./components/images/products/Spikerfon/spikerfon9.jpg"

// ElektronTruba
import ElektronTruba1 from "./components/images/products/ElektronTruba/elektr1.jpg"
import ElektronTruba2 from "./components/images/products/ElektronTruba/elektr2.jpg"
import ElektronTruba3 from "./components/images/products/ElektronTruba/elektr3.jpg"
import ElektronTruba4 from "./components/images/products/ElektronTruba/elektr4.jpg"
import ElektronTruba5 from "./components/images/products/ElektronTruba/elektr5.jpg"
import ElektronTruba6 from "./components/images/products/ElektronTruba/elektr6.jpg"
import ElektronTruba7 from "./components/images/products/ElektronTruba/elektr7.jpg"
import ElektronTruba8 from "./components/images/products/ElektronTruba/elektr8.jpg"
import ElektronTruba9 from "./components/images/products/ElektronTruba/elektr9.jpg"
import ElektronTruba10 from "./components/images/products/ElektronTruba/elektr10.jpg"

// Klaviatura
import klaviatura1 from "./components/images/products/Klaviatura/klaviatura1.jpg"
import klaviatura2 from "./components/images/products/Klaviatura/klaviatura2.jpg"
import klaviatura3 from "./components/images/products/Klaviatura/klaviatura3.jpg"
import klaviatura4 from "./components/images/products/Klaviatura/klaviatura4.jpg"
import klaviatura5 from "./components/images/products/Klaviatura/klaviatura5.jpg"
import klaviatura6 from "./components/images/products/Klaviatura/klaviatura6.jpg"
import klaviatura7 from "./components/images/products/Klaviatura/klaviatura7.jpg"
import klaviatura8 from "./components/images/products/Klaviatura/klaviatura8.jpg"
import klaviatura9 from "./components/images/products/Klaviatura/klaviatura9.jpg"

// Mishka
import Mishka1 from "./components/images/products/Mishka/mishka1.jpg"
import Mishka2 from "./components/images/products/Mishka/mishka2.jpg"
import Mishka3 from "./components/images/products/Mishka/mishka3.jpg"

// Import your icons
import basket from "./components/images/icons/shoppingbag.png";


const products = [
  // Видеостена
  {
    id: 1,
    name: 'Видеостена LCD 46',
    href: 'https://protouch.uz/%d0%b2%d0%b8%d0%b4%d0%b5%d0%be%d1%81%d1%82%d0%b5%d0%bd%d0%b0-lcd-46%e2%80%b3/',
    imageSrc: videostena1,
    imageAlt: "Видеостена",
    price: 'Цена договорная',
    color: 'Диагональ экрана: 46; Размер панели: 1022x576мм; Тип панели: D-LED DID; Разрешение: FullHD; Яркость: 500 кд/м²; Ширина рамки: 3,5мм; Выход RGB: DP1.2 (Loop-out); Аудиовход: Стерео мини Jack; Аудиовыход: Стерео мини Jack; Видеовход: HDMI1, HDMI2',
  },
  {
    id: 2,
    name: 'Видеостена LCD 65',
    href: 'https://protouch.uz/%d0%b2%d0%b8%d0%b4%d0%b5%d0%be%d1%81%d1%82%d0%b5%d0%bd%d0%b0-lcd-65%e2%80%b3/',
    imageSrc: videostena1,
    imageAlt: "Видеостена",
    price: 'Цена договорная',
    color: 'Диагональ экрана: 65; Размер панели: 1432,6x807,6мм; Тип панели: D-LED DID; Разрешение: FullHD; Яркость: 500 кд/м²; Ширина рамки: 3,5мм; Выход RGB: DP1.2 (Loop-out); Аудиовход: Стерео мини Jack; Аудиовыход: Стерео мини Jack; Видеовход: HDMI1, HDMI2',
  },
  {
    id: 3,
    name: 'Видеостена Samsung UDE-B 55 (B)',
    href: 'https://protouch.uz/%d0%b2%d0%b8%d0%b4%d0%b5%d0%be%d1%81%d1%82%d0%b5%d0%bd%d0%b0-samsung-ude-b-55-b/',
    imageSrc: videostena2,
    imageAlt: "Видеостена",
    price: 'Цена договорная',
    color: 'Разрешение: 1920 x 1080; Активная площадь дисплея: 1 209,6 x 680,4 мм; Размер Экрана: Диагональ 55; Ширина рамки: 2,3 мм (Верхняя / нижняя кромки); Вес: 21.5 кг; Габариты: 1 213,5 x 684,3 x 96,6 мм; Частота развертки по вертикали: 48 Гц ~ 75 Гц',
  },
  // Интерактивная Сенсорная Панель
  {
    id: 4,
    name: 'PKLNS Pro Space K Series 86',
    href: 'https://protouch.uz/pklns-pro-space-k-series-86/',
    imageSrc: InteractivPanel1,
    imageAlt: "Интерактивная Сенсорная Панель",
    price: '$4200',
    color: 'Максимальное разрешение: 3840х2160@60Hz UltraHD 4K; Операционные системы: Android 8; Оперативная память: 8GB DDR3; Память: 32G B eMMC; Тип панели: DLED; HDMI : 3; VGA : 1 Android USB: 2',
  },
  {
    id: 5,
    name: 'PKLNS Pro Space K Series 75',
    href: 'https://protouch.uz/1210-2/',
    imageSrc: InteractivPanel1,
    imageAlt: "Интерактивная Сенсорная Панель",
    price: '$3200',
    color: 'Максимальное разрешение: 3840х2160@60Hz UltraHD 4K; Операционные системы: Android 8; Оперативная память: 8GB DDR3; Память: 32G B eMMC; Тип панели: DLED; HDMI : 3; VGA : 1 Android USB: 2',
  },
  {
    id: 6,
    name: 'PKLNS Pro Space K Series 65',
    href: 'https://protouch.uz/pklns-pro-space-k-series-65/',
    imageSrc: InteractivPanel1,
    imageAlt: "Интерактивная Сенсорная Панель",
    price: '$1988',
    color: 'Максимальное разрешение: 3840х2160@60Hz UltraHD 4K; Операционные системы: Android 8; Оперативная память: 8GB DDR3; Память: 32G B eMMC; Тип панели: DLED; HDMI : 3; VGA : 1 Android USB: 2',
  },
  {
    id: 7,
    name: 'FlexHub 3s 86',
    href: 'https://protouch.uz/%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d0%b0%d0%ba%d1%82%d0%b8%d0%b2%d0%bd%d0%b0%d1%8f-%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d0%b0%d1%8f-%d0%bf%d0%b0%d0%bd%d0%b5%d0%bb%d1%8c-flexhub-3s-86/',
    imageSrc: InteractivPanel2,
    imageAlt: "Интерактивная Сенсорная Панель",
    price: '22 000 000 сум',
    color: 'Диагональ экрана: 86; Максимальное разрешение: 3840х2160@60Hz 4K; Операционные системы: Windows 11/Android 13.0; Процессор: Quad core A55; Оперативная память: 8GB; Хранение: 128GB eMMC; Доставка по Ташкенту: Да; Бесплатная установка: Да',
  },
  {
    id: 8,
    name: 'FlexHub 3s 75',
    href: 'https://protouch.uz/%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d0%b0%d0%ba%d1%82%d0%b8%d0%b2%d0%bd%d0%b0%d1%8f-%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d0%b0%d1%8f-%d0%bf%d0%b0%d0%bd%d0%b5%d0%bb%d1%8c-flexhub-3s-75/',
    imageSrc: InteractivPanel2,
    imageAlt: "Интерактивная Сенсорная Панель",
    price: '15 000 000 сум',
    color: 'Диагональ экрана : 65; Максимальное разрешение: 3840х2160@60Hz 4K; Операционные системы: Windows 11/Android 13.0; Процессор: Quad core A55; Оперативная память: 8GB; Хранение: 256GB SSD/32G B eMMC; Доставка по Ташкенту: Да; Бесплатная установка: Да',
  },
  {
    id: 9,
    name: 'FlexHub 3s 65',
    href: 'https://protouch.uz/%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d0%b0%d0%ba%d1%82%d0%b8%d0%b2%d0%bd%d0%b0%d1%8f-%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d0%b0%d1%8f-%d0%bf%d0%b0%d0%bd%d0%b5%d0%bb%d1%8c-flexhub-3s-65/',
    imageSrc: InteractivPanel2,
    imageAlt: "Интерактивная Сенсорная Панель",
    price: '11 000 000 сум',
    color: 'Диагональ экрана : 65; Максимальное разрешение: 3840х2160@60Hz 4K; Операционные системы: Windows 11/Android 13.0; Процессор: Quad core A55; Оперативная память: 8GB; Хранение: 256GB SSD/32G B eMMC; Доставка по Ташкенту: Да; Бесплатная установка: Да',
  },
  {
    id: 10,
    name: 'Интерактивный панель LG 86',
    href: 'https://protouch.uz/%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d0%b0%d0%ba%d1%82%d0%b8%d0%b2%d0%bd%d1%8b%d0%b9-%d0%bf%d0%b0%d0%bd%d0%b5%d0%bb%d1%8c-lg-86/',
    imageSrc: InteractivPanel3,
    imageAlt: "Интерактивная Сенсорная Панель",
    price: '44 000 000 сум',
    color: 'Диагональ экрана: 86 дюймов; Собственное разрешение : 3840 x 2160 (UHD); Соотношение сторон : 16:9; (Вход) USB : USB 2.0 (3, впереди: 2 порта, снизу: 1 порт, только для обновления ПО), USB 3.0 (3), Touch Out (USB 2.0, тип B) (2); Размеры монитора (Ш × В × Г) : 1957 × 1160 × 86 мм; Основные: Кабель питания 3 м*1, кабель USB (тип A-тип B) 5 м*1, кабель HDMI 3 м*1, перо*2 шт., руководство пользователя, краткое руководство по началу работы, картонная коробка, пульт ДУ; Время отклика : 60 мс ↓ (Android) / 100 мс ↓ (Windows); Поддерживаемые операционные системы : Windows 7/8/10/WindowsXP/Linux/Mac/Android (WindowsXP/Linux/Mac поддерживают касание в одной точке); Количество распознаваемых точек касания : Не более 20 точек / не более 10 (письмо)',
  },
  {
    id: 11,
    name: 'Интерактивный панель LG 75',
    href: 'https://protouch.uz/%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d0%b0%d0%ba%d1%82%d0%b8%d0%b2%d0%bd%d1%8b%d0%b9-%d0%bf%d0%b0%d0%bd%d0%b5%d0%bb%d1%8c-lg-75/',
    imageSrc: InteractivPanel3,
    imageAlt: "Интерактивная Сенсорная Панель",
    price: '33 000 000 сум',
    color: 'Размер экрана : 75 дюймов; Собственное разрешение : 3840 x 2160 (UHD); Поддерживаемые операционные системы : Windows 7/8/10/WindowsXP/Linux/Mac/Android (WindowsXP/Linux/Mac поддерживают касание в одной точке); Количество распознаваемых точек касания : Не более 20 точек / не более 10 (письмо); Основные : Кабель питания 3 м*1, кабель USB (тип A-тип B) 5 м*1, кабель HDMI 3 м*1, перо*2 шт., руководство пользователя, краткое руководство по началу работы, картонная коробка, пульт ДУ; Динамик : Встроенный 24 Вт (12 Вт + 12 Вт); Вес (основной) : 53 кг',
  },
  {
    id: 12,
    name: 'Интерактивный панель LG 65',
    href: 'https://protouch.uz/%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d0%b0%d0%ba%d1%82%d0%b8%d0%b2%d0%bd%d1%8b%d0%b9-%d0%bf%d0%b0%d0%bd%d0%b5%d0%bb%d1%8c-lg-65/',
    imageSrc: InteractivPanel3,
    imageAlt: "Интерактивная Сенсорная Панель",
    price: '22 000 000 сум',
    color: 'Размер экрана : 65 дюймов; Соотношение сторон : 16 : 9; (Вход) USB : USB 2.0 (3, впереди: 2 порта, снизу: 1 порт, только для обновления ПО), USB 3.0 (3), Touch Out (USB 2.0, тип B) (2); (Выход) Видео / аудио : HDMI (1), оптический выход / аудиовыход; Размеры монитора (Ш × В × Г) : 1488 × 897× 86 мм; Основные : Кабель питания 3 м*1, кабель USB (тип A-тип B) 5 м*1, кабель HDMI 3 м*1, перо*2 шт., руководство пользователя, краткое руководство по началу работы, картонная коробка, пульт ДУ; Время отклика : 60 мс ↓ (Android) / 100 мс ↓ (Windows); Поддерживаемые операционные системы : Windows 7/8/10/WindowsXP/Linux/Mac/Android (WindowsXP/Linux/Mac поддерживают касание в одной точке); Количество распознаваемых точек касания : Не более 20 точек / не более 10 (письмо)',
  },
  // Сенсорные инфокиоски
  {
    id: 13,
    name: '43-дюймовый горизонтальный киоск',
    href: 'https://protouch.uz/43-%d0%b4%d1%8e%d0%b9%d0%bc%d0%be%d0%b2%d1%8b%d0%b9-%d0%b3%d0%be%d1%80%d0%b8%d0%b7%d0%be%d0%bd%d1%82%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%ba%d0%b8%d0%be%d1%81%d0%ba/',
    imageSrc: Infokiosk2,
    imageAlt: "Инфокиоск",
    price: '19 000 000 сум',
    color: 'Максимальное разрешение: 1920*1080 Full HD; Процессор: Intel® Core™ 4th Generation I5; Память: 128GB; RAM: 8GB DDR3; Видеокарта: Intel® HD4400; Операционная система: Windows 10; Звуковая карта: Realtek ALC662 5.1 Channel HD',
  },
  {
    id: 14,
    name: 'Сенсорный инфокиоск ProtO55GK 55',
    href: 'https://protouch.uz/%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d1%8b%d0%b9-%d0%b8%d0%bd%d1%84%d0%be%d0%ba%d0%b8%d0%be%d1%81%d0%ba-proto55gk-55/',
    imageSrc: Infokiosk3,
    imageAlt: "Инфокиоск",
    price: 'Цена договорная',
    color: 'Диагональ экрана: 55”; Размер стола: 1500x1332x55мм; Разрешение экрана: Full HD / Сенсорная; Операционная система: Windows 10; Процессор: Intel Core i5 6th; Память: DDR3 4GB / 128GB; Подключение : Wi-Fi; Корпус: Металлический',
  },
  {
    id: 15,
    name: 'Сенсорный инфокиоск Prot55GL 55',
    href: 'https://protouch.uz/%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d1%8b%d0%b9-%d0%b8%d0%bd%d1%84%d0%be%d0%ba%d0%b8%d0%be%d1%81%d0%ba-inn55gl-55/',
    imageSrc: Infokiosk1,
    imageAlt: "Инфокиоск",
    price: 'Цена договорная',
    color: 'Диагональ экрана: 55”; Размер стола: 1276x1337x80мм; Разрешение экрана: 2K / Сенсорная; Операционная система: Windows 10; Процессор: Intel Core i3 7th; Память: DDR3 4GB / 128GB; Подключение: Wi-Fi; Перемещение: На роликах; Корпус: Металлический',
  },
  {
    id: 16,
    name: 'Горизонтальный сенсорный инфокиоск 43',
    href: 'https://protouch.uz/%d0%b3%d0%be%d1%80%d0%b8%d0%b7%d0%be%d0%bd%d1%82%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d1%8b%d0%b9-%d0%b8%d0%bd%d1%84%d0%be%d0%ba%d0%b8%d0%be%d1%81%d0%ba-43/',
    imageSrc: Infokiosk4,
    imageAlt: "Инфокиоск",
    price: '14 600 000 сум',
    color: 'Размер экрана : Диагональ 43; Максимальное разрешение : 1920х1080 FullHD; Соотношение сторон : 16:9; Активный размер : 1000 х 590 мм.; Яркость : 450 cd/m; Экран : Антивандальное стекло; Технология сенсора : Инфракрасная до 10 касаний, TFT-LCD; Процессор : Intel Core i3; Операционная система : Windows 10; Жесткий диск : 128GB SSD',
  },
  {
    id: 17,
    name: 'Вертикальный сенсорный инфокиоск PROT-65',
    href: 'https://protouch.uz/%d0%b2%d0%b5%d1%80%d1%82%d0%b8%d0%ba%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d1%8b%d0%b9-%d0%b8%d0%bd%d1%84%d0%be%d0%ba%d0%b8%d0%be%d1%81%d0%ba-prot-65/',
    imageSrc: Infokiosk6,
    imageAlt: "Инфокиоск",
    price: '17 500 000 сум',
    color: 'Размер экрана : 65 дюймов; Активный размер : 1428 х 803 мм; Технология сенсора : Инфракрасная до 10 касаний; Максимальное разрешение : 1920х1080 FullHD; Интерфейсы : Вход DC, Выход HDMI, Выход VGA, 2xUSB 2.0, 2xUSB 3.0, RJ45(LAN), 1x3.5 мм audio; Процессор : Intel Core i3; Оперативная память : 4 GB; Жесткий диск : SSD 128 GB; Операционная система : Windows 10; Габариты: 2050 х 940 х 80 мм.',
  },
  {
    id: 18,
    name: 'Вертикальный сенсорный инфокиоск PROT-50',
    href: 'https://protouch.uz/%d0%b2%d0%b5%d1%80%d1%82%d0%b8%d0%ba%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d1%8b%d0%b9-%d0%b8%d0%bd%d1%84%d0%be%d0%ba%d0%b8%d0%be%d1%81%d0%ba-prot-50/',
    imageSrc: Infokiosk6,
    imageAlt: "Инфокиоск",
    price: '15 500 000 сум',
    color: 'Размер экрана : 50 дюймов; Активный размер : 1096 х 616 мм; Технология сенсора : Инфракрасная до 10 касаний; Максимальное разрешение : 1920х1080 FullHD; Интерфейсы : Вход DC, Выход HDMI, Выход VGA, 2xUSB 2.0, 2xUSB 3.0, RJ45(LAN), 1x3.5 мм audio; Процессор : Intel Core i3; Оперативная память : 4 GB; Жесткий диск : SSD 128 GB; Операционная система : Windows 10; Габариты: 1850 х 730 х 60 мм.',
  },
  {
    id: 19,
    name: 'Вертикальный сенсорный инфокиоск PROT-55',
    href: 'https://protouch.uz/%d0%b2%d0%b5%d1%80%d1%82%d0%b8%d0%ba%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d1%8b%d0%b9-%d0%b8%d0%bd%d1%84%d0%be%d0%ba%d0%b8%d0%be%d1%81%d0%ba-prot-55/',
    imageSrc: Infokiosk6,
    imageAlt: "Инфокиоск",
    price: '16 500 000 сум',
    color: 'Размер экрана : 55 дюймов; Активный размер : 1210 х 680 мм; Технология сенсора : Инфракрасная до 10 касаний; Максимальное разрешение : 1920х1080 FullHD; Интерфейсы : Вход DC, Выход HDMI, Выход VGA, 2xUSB 2.0, 2xUSB 3.0, RJ45(LAN), 1x3.5 мм audio; Процессор : Intel Core i3; Оперативная память : 4 GB; Жесткий диск : SSD 128 GB; Операционная система : Windows 10; Габариты: 1800 х 800 х 60 мм.',
  },
  {
    id: 20,
    name: 'Вертикальный сенсорный инфокиоск PROT-43',
    href: 'https://protouch.uz/%d0%b3%d0%be%d1%80%d0%b8%d0%b7%d0%be%d0%bd%d1%82%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d1%8b%d0%b9-%d0%b8%d0%bd%d1%84%d0%be%d0%ba%d0%b8%d0%be%d1%81%d0%ba-prot/',
    imageSrc: Infokiosk6,
    imageAlt: "Инфокиоск",
    price: '15 000 000 сум',
    color: 'Размер Экрана: Диагональ 43; Максимальное разрешение : 1980х1080 FullHD; Соотношение сторон : 16:9; Активный размер : Активный размер; Яркость: 450 cd/m; 450 cd/m: Антивандальное стекло; Технология сенсора : Инфракрасная до 10 касаний, TFT-LCD; Процессор : Intel Core i3; Оперативная память : 4GB; Операционная система : Windows 10',
  },
  {
    id: 21,
    name: 'Горизонтальный сенсорный инфокиоск 32',
    href: 'https://protouch.uz/%d0%b3%d0%be%d1%80%d0%b8%d0%b7%d0%be%d0%bd%d1%82%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%81%d0%b5%d0%bd%d1%81%d0%be%d1%80%d0%bd%d1%8b%d0%b9-%d0%b8%d0%bd%d1%84%d0%be%d0%ba%d0%b8%d0%be%d1%81%d0%ba-32/',
    imageSrc: Infokiosk5,
    imageAlt: "Infokiosk",
    price: '12 000 000 сум',
    color: 'Размер Экрана: Размер Экрана; Разрешение: 1980х1080 FullHD; Процессор: Intel Core i3; Оперативная память: 4GB; Жесткий диск: SSD 128 GB; Операционная система: Windows 10; Доставка по Ташкенту: Да',
  },

  // Камера
  {
    id: 22,
    name: 'Камера AVer PTC310',
    href: 'https://protouch.uz/%d0%ba%d0%b0%d0%bc%d0%b5%d1%80%d0%b0-aver-ptc310-%d1%81-%d1%84%d1%83%d0%bd%d0%ba%d1%86%d0%b8%d0%b5%d0%b9-%d0%be%d1%82%d1%81%d0%bb%d0%b5%d0%b6%d0%b8%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f/',
    imageSrc: Kamera1,
    imageAlt: "Kamera",
    price: 'Цена договорная',
    color: 'Разрешение: FullHD 1920x1080@60; Зум: 24x,(Оптический 12х, Цифровой 12х); Эффективные пиксели: 2.07 мегапиксель; Угол зрения: 3,3 ° (теле) - 54,7 ° (широкий); Датчик: 1/2,8 дюйма HD CMOS; Вес: 1,4 кг; Размер продукта: 150x167.5x150mm; Видеоинтерфейсы: USB2.0, LAN, RS232 (IN & OUT), A-In',
  },
  {
    id: 23,
    name: 'CC600 360°',
    href: 'https://protouch.uz/%d0%ba%d0%b0%d0%bc%d0%b5%d1%80%d0%b0-%d0%b4%d0%bb%d1%8f-%d0%ba%d0%be%d0%bd%d1%84%d0%b5%d1%80%d0%b5%d0%bd%d1%86%d0%b8%d0%b9-cc600-360-camera/',
    imageSrc: Kamera2,
    imageAlt: "Kamera",
    price: 'Цена договорная',
    color: "Оптический зум: 5x; Объектив: f=2.49mm; Пиксели: 5.0 MP; Видео интерфейсы: TYPE-C ( USB 2.0 ); Датчик изображения: 1/2.7'' CMOS Sensor; Формат: 4992x928/30 кадров в секунду (только панорама) 1920x1080/30 кадров в секунду,; Видео: 1280x720/30fps, 640x360/30fps",
  },
  {
    id: 24,
    name: 'VKSGROUP-SV3600',
    href: 'https://protouch.uz/vksgroup-sv3600/',
    imageSrc: Kamera3,
    imageAlt: "Kamera",
    price: '10 500 000 сум',
    color: 'Разрешение (видео): 1920x1080 @ 30гц; Сенсор: 1/2,7" CMOS 2,07 Мп; Подключение: DIN6; Оптический/ Zoom: 12x/16x; Угол обзора объектива: 72,5 град.; Угол наклона: 120 град; Угол поворота: 340 град.; Размеры (ШxВxГ): 144x144x167,9 мм',
  },
  {
    id: 25,
    name: 'VKSCAM-UV950AH',
    href: 'https://protouch.uz/vkscam-uv950ah/',
    imageSrc: Kamera4,
    imageAlt: "Kamera",
    price: '9 500 000 сум',
    color: 'Разрешение (видео): 1920x1080; Максимальная частота кадров: 60 Гц; Поддержка режимов: 1920x1080 @ 60/50 Гц, 1280x720 @60/50 Гц; Разрешение сенсора: 2.07 Мп; Сенсор: 1/2,8" высококачественный HD CMOS; Подключение: USB 3.0, DVI(HDMI); Фокусировка: автоматическая; Оптический Zoom: 12x/10x; Интерфейс управления: RS-232; Управляющий протокол: Visca / Pelco-D / Pelco-P',
  },
  {
    id: 26,
    name: 'VKSCAM-HD20XU',
    href: 'https://protouch.uz/vkscam-hd20xu/',
    imageSrc: Kamera5,
    imageAlt: "Kamera",
    price: '9 000 000 сум',
    color: 'Разрешение (видео): 1920x1080; Максимальная частота кадров: 30 Гц; Поддержка режимов: 1920x1080 @ 30 Гц, 1280x720 @30 Гц; Разрешение сенсора: 2.1 Мп; Сенсор: 1/3" Exmor HD CMOS; Подключение: USB 2.0; Фокусировка: автоматическая; Оптический Zoom: 20x; Интерфейс управления: RS-232 in/out, RS-485; Управляющий протокол: Visca / Pelco-D / Pelco-P',
  },
  {
    id: 27,
    name: 'VKSCAM-U20',
    href: 'https://protouch.uz/vkscam-u20/',
    imageSrc: Kamera6,
    imageAlt: "Kamera",
    price: 'Цена договорная',
    color: 'Разрешение (видео): 1920x1080; Максимальная частота кадров: 30 Гц; Поддержка режимов: 1920x1080 @30 Гц, 1280x720 @30 Гц; Разрешение сенсора: 2.1 Мп; Сенсор: 1/2.8" высококачественный HD CMOS; Подключение: USB 2.0; Фокусировка: автоматическая; Оптический Zoom: 20x; Интерфейс управления: RS232c in/out / RS485; Управляющий протокол: Visca / Pelco / UVC',
  },
  {
    id: 28,
    name: 'VKSCAM-71UV',
    href: 'https://protouch.uz/vkscam-71uv/',
    imageSrc: Kamera7,
    imageAlt: "Kamera",
    price: '9 000 000 сум',
    color: 'Разрешение (видео): 1920x1080; Максимальная частота кадров: 30 Гц; Поддержка режимов: 1920x1080 @ 30 Гц/25 Гц, 1280x720 @ 30 Гц/25 Гц; Разрешение сенсора: 2.07 Мп; Сенсор: 1/2,8" прогрессивный CMOS; Подключение: USB 2.0; Фокусировка: автоматическая; Оптический Zoom: 12x; Цифровой Zoom: 16x; Интерфейс управления: управления: RS-232 in/out, UVC 1.5(USB 2.0)',
  },
  {
    id: 29,
    name: 'VKSCAM-HD40R',
    href: 'https://protouch.uz/vkscam-hd40r/',
    imageSrc: Kamera8,
    imageAlt: "Kamera",
    price: '12 000 000 сум',
    color: 'Разрешение (видео): 1920x1080; Максимальная частота кадров: HDMI 60 Гц; Поддержка режимов: HDMI 1920x1080 @ 60 Гц / 50 Гц / 30 Гц / 25 Гц, 1280x720 @ 60 Гц / 50 Гц; Разрешение сенсора: 3.5 Мп; Сенсор: 1/2.8" SONY прогрессивный CMOS; Подключение: HDMI, USB 2.0; Фокусировка: автоматическая; Оптический Zoom: 12x; Интерфейс управления: RS-232, RS-485, USB 2.0',
  },
  {
    id: 30,
    name: 'VKSCAM-UV510A-HW',
    href: 'https://protouch.uz/vkscam-uv510a-hw/',
    imageSrc: Kamera9,
    imageAlt: "Kamera",
    price: '9 000 000 сум',
    color: 'Разрешение (видео): 1920x1080; Максимальная частота кадров: 30 Гц; Поддержка режимов: 1920x1080 @ 30 Гц / 1280х720 @ 30 Гц; Разрешение сенсора: 2.07 Мп; Сенсор: 1/2,8" высококачественный HD CMOS; Подключение: USB 2.0; Фокусировка: автоматическая; Оптический Zoom: 10x; Интерфейс управления: RS-232 in/out, RS-485; Управляющий протокол: Visca / Pelco-P / Pelco-D',
  },
  {
    id: 31,
    name: 'VKSCAM-U10-1080',
    href: 'https://protouch.uz/vkscam-u10-1080/',
    imageSrc: Kamera10,
    imageAlt: "Kamera",
    price: '9 500 000 сум',
    color: 'Разрешение (видео): 1920x1080; Максимальная частота кадров: 30 Гц; Поддержка режимов: 1920x1080 @ 30 Гц/25 Гц, 1280x720 @25 Гц; Разрешение сенсора: 2.1 Мп; Сенсор: 1/2.8" SONY CMOS; Подключение: USB 2.0; Фокусировка: автоматическая; Оптический Zoom: 10x; Интерфейс управления: RS-232; Управляющий протокол: Visca / Pelco-D / UVC',
  },

  // Мобильный Напольный Стенд
  {
    id: 32,
    name: 'Модель 2x',
    href: 'https://protouch.uz/%d0%bc%d0%be%d0%b4%d0%b5%d0%bb%d1%8c-2x/',
    imageSrc: mobilstoy1,
    imageAlt: "mobilstoy",
    price: 'Цена договорная',
    color: 'Размер панели: 43” – 86”; Габариты: 1780х 1055 х 470 мм; Грузоподъемность: 100kg; Вес: 45kg; Диапазон наклона: ~ -15° +15°; Тип: Автоматизированный',
  },
  {
    id: 33,
    name: 'Мобильный Напольный Стенд 2000',
    href: 'https://protouch.uz/%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bd%d0%b0%d0%bf%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%81%d1%82%d0%b5%d0%bd%d0%b4-2000/',
    imageSrc: mobilstoy2,
    imageAlt: "mobilstoy",
    price: 'Цена договорная',
    color: 'Вес: 42kg; Диапазон наклона: ~ -10° +10°; Размер панели: 55” – 86 ”; Габариты: 1640х 900 х 600 мм; Грузоподъемность: 120kg',
  },
  {
    id: 34,
    name: 'Мобильный напольный стенд 1700',
    href: 'https://protouch.uz/%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bd%d0%b0%d0%bf%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%81%d1%82%d0%b5%d0%bd%d0%b4-1700/',
    imageSrc: mobilstoy3,
    imageAlt: "mobilstoy",
    price: '1 500 000 сум',
    color: 'BlacДиагональ панели : 55"-65"; Выдерживаемый вес : 100 кг; Колёсики : Имеются с фиксаторами положения; Полки : Имеются 2; Материал : Металлk',
  },
  {
    id: 35,
    name: 'Мобильный напольный стенд 1800',
    href: 'https://protouch.uz/%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bd%d0%b0%d0%bf%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d1%81%d1%82%d0%b5%d0%bd%d0%b4-1800/',
    imageSrc: mobilstoy4,
    imageAlt: "mobilstoy",
    price: '2 500 000 сум',
    color: 'Диагональ панели : 65"-86"; Выдерживаемый вес : 180 кг; Колёсики : Имеются с фиксаторами положения; Полки: Имеются 2; Материал : Металл',
  },

  // Monoblok
  {
    id: 36,
    name: 'Poligon D-Series i5-10/8/256гб',
    href: 'https://protouch.uz/poligon-s-series-i5-10-8-256%d0%b3%d0%b1/',
    imageSrc: monoblok,
    imageAlt: "Monoblok",
    price: '5 000 000 сум',
    color: 'Процессор: i5 10400; RAM: 8гб; Память: 256гб; Экран: FHD IPS; Видео карта: LCD/Intel UHD Graphics/MB; Wi-Fi: 802.11',
  },
  {
    id: 37,
    name: 'Poligon C-Series',
    href: 'https://protouch.uz/poligon-s-series/',
    imageSrc: monoblok,
    imageAlt: "Monoblok",
    price: '2 800 000 сум',
    color: 'Комплектация: материнская плата H510; Цвет: Белый; Тип экрана: LED IPS; Диагональ: 24"; Встроенная акустическая система: есть; Порт USB 2.0 тип A: 4 шт; Порт USB 3.0 тип A: 2 шт; Память: 256 ГБ',
  },

  // Спикерфон
  {
    id: 38,
    name: 'VKSSPEAK-POD3',
    href: 'https://protouch.uz/vksspeak-pod3/',
    imageSrc: Spikerfon1,
    imageAlt: "Спикерфон",
    price: '9 000 000 сум',
    color: 'Спикерфон для конференц комнат: 25го уровня; Уровень звука: до 65 дБ; Кол-во микрофонов : 6 микрофона; Дальность расширения : до 3 метров, охват 360°; Тип подключения : Bluetooth, USB Type-c; Интерфейс: USB Type-c; Физ. Характеристики : 130x130x35 мм; Батарейка 3000 mAh : до 8 часов беспрерывной работы; Комплектация Кабель : USB Type-c',
  },
  {
    id: 39,
    name: 'VKSSPEAK-SV13W',
    href: 'https://protouch.uz/vksspeak-sv13w/',
    imageSrc: Spikerfon2,
    imageAlt: "Спикерфон",
    price: '9 500 000 сум',
    color: 'Спикерфон для конференц комнат: 30го уровня; Уровень звука: до 86 дБ, 16 уровней громкости; Дальность расширения : до 4 метров; Время работы при полном заряде аккумулятора : до 4 часов; Интерфейс: Wi-Fi 2.4G, USB 2.0, AUX; Комплект поставки: Спикерфон, Wi-fi 2.4G, Кабель USB 2.0, AUX(3,5мм), Блок питания.; Размеры (ШxВxГ): 141x141x42 мм',
  },
  {
    id: 40,
    name: 'VKSSPEAK-SV12W',
    href: 'https://protouch.uz/vksspeak-sv12w/',
    imageSrc: Spikerfon3,
    imageAlt: "Спикерфон",
    price: '9 500 000 сум',
    color: 'Спикерфон для конференц комнат: 25го уровня; Уровень звука: до 80 дБ, 16 уровней громкости; Дальность расширения : до 3 метров; Время работы при полном заряде аккумулятора : до 4 часов; Интерфейс: Wi-Fi 2.4G, USB 2.0, AUX; Комплект поставки: Спикерфон, Wi-fi 2.4G, Кабель USB 2.0, AUX(3,5мм), Блок питания.; Размеры (ШxВxГ): 141x141x42 мм',
  },
  {
    id: 41,
    name: 'VKSSPEAK-SV12B',
    href: 'https://protouch.uz/vksspeak-sv12b/',
    imageSrc: Spikerfon4,
    imageAlt: "Спикерфон",
    price: '9 500 000 сум',
    color: 'Спикерфон для конференц комнат: 25го уровня; Уровень звука: до 80 дБ, 16 уровней громкости; Дальность расширения : до 3 метров; Время работы при полном заряде аккумулятора : до 4 часов; Интерфейс: Интерфейс; Комплект поставки: Спикерфон, Кабель USB 2.0, AUX(3,5мм), Блок питания; Размеры (ШxВxГ): 141x141x42 мм',
  },
  {
    id: 42,
    name: 'VKSSPEAK-SV16W',
    href: 'https://protouch.uz/vksspeak-sv16w/',
    imageSrc: Spikerfon5,
    imageAlt: "Спикерфон",
    price: '5 000 000 сум',
    color: 'Спикерфон для конференц комнат: 40го уровня; Уровень звука: до 90 дБ, 16 уровней громкости; Дальность расширения : до 4 метров; Интерфейс: Wi-Fi 5.8G, USB 2.0, AUX; Комплект поставки: Спикерфон, Wi-fi 5.8G, Кабель USB 2.0, AUX(3,5мм), Блок питания.; Размеры (ШxВxГ): 141x141x42 мм',
  },
  {
    id: 43,
    name: 'VKSSPEAK-SV16B',
    href: 'https://protouch.uz/vksspeak-sv16b/',
    imageSrc: Spikerfon6,
    imageAlt: "Спикерфон",
    price: '5.000.000 сум',
    color: 'Спикерфон для конференц комнат: 40го уровня; Уровень звука: до 90 дБ, 16 уровней громкости; Дальность расширения : до 4 метров; Интерфейс: Bluetooth, USB 2.0, AUX; Комплект поставки: Спикерфон, Кабель USB 2.0, AUX(3,5мм), Блок питания.; Размеры (ШxВxГ): 180x180x42 мм',
  },
  {
    id: 44,
    name: 'VKSSPEAK-X1',
    href: 'https://protouch.uz/vksspeak-x1/',
    imageSrc: Spikerfon7,
    imageAlt: "Спикерфон",
    price: '3 000 000 сум',
    color: 'Спикерфон для конференц комнат: 25го уровня; Уровень звука: до 85 дБ; Кол-во микрофонов : 3 микрофона; Интерфейс: USB 2.0; Физ. Характеристики : 203x179x40 мм; Комплектация Соединённый кабель : USB 2.0',
  },
  {
    id: 45,
    name: 'VKSSPEAK-EXTMIC',
    href: 'https://protouch.uz/vksspeak-extmic/',
    imageSrc: Spikerfon8,
    imageAlt: "Спикерфон",
    price: '5 000 000 сум',
    color: 'Количество микрофонов: 2 микрофона; Интерфейс: 4P4C; Комплект поставки: Микрофон х2, Кабели 4P4C х3',
  },
  {
    id: 46,
    name: 'VKSSPEAK-S220',
    href: 'https://protouch.uz/vksspeak-s220/',
    imageSrc: Spikerfon9,
    imageAlt: "Спикерфон",
    price: '8 000 000 сум',
    color: 'Спикерфон для конференц комнат: 25го уровня; Уровень звука: до 85дБ; Адаптер питания, Кабель: : USB 2.0, Кабель RJ-45, Двойник 3,5мм Jack; Размеры (ШxВxГ): 237x237x44 мм',
  },
  {
    id: 47,
    name: 'VKSSPEAK-SV16U',
    href: 'https://protouch.uz/vksspeak-sv16u/',
    imageSrc: Spikerfon6,
    imageAlt: "Спикерфон",
    price: '9 000 000 сум',
    color: 'Спикерфон для конференц комнат: 40го уровня; Уровень звука: до 90 дБ, 16 уровней громкости; Интерфейс: USB 2.0, AUX; Комплект поставки: Спикерфон, Кабель USB 2.0, AUX(3,5мм); Размеры (ШxВxГ): 180x180x42 мм',
  },

  // Аудиовизуальный подиум
  {
    id: 48,
    name: 'Аудиовизуальный подиум (Регулируемая по высоте) ST200',
    href: 'https://protouch.uz/%d0%b0%d1%83%d0%b4%d0%b8%d0%be%d0%b2%d0%b8%d0%b7%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc-%d1%80%d0%b5%d0%b3%d1%83%d0%bb%d0%b8%d1%80%d1%83%d0%b5%d0%bc%d0%b0-2/',
    imageSrc: ElektronTruba7,
    imageAlt: "ElektronTruba",
    price: 'Цена договорная',
    color: 'Процессор: Intel i5 11th; Озу: 16GB DDR4; Память: 512GB SSD; Дисплей: 21,5-дюйм; Размеры: 750*680*1000мм',
  },
  {
    id: 49,
    name: 'Аудиовизуальный подиум (Регулируемая по высоте) SP-Y900',
    href: 'https://protouch.uz/%d0%b0%d1%83%d0%b4%d0%b8%d0%be%d0%b2%d0%b8%d0%b7%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc-%d1%80%d0%b5%d0%b3%d1%83%d0%bb%d0%b8%d1%80%d1%83%d0%b5%d0%bc%d0%b0/',
    imageSrc: ElektronTruba6,
    imageAlt: "Spikerfon",
    price: 'Цена договорная',
    color: 'Процессор: Intel i5 11th; Озу: 16GB DDR4; Память: 512GB SSD; Дисплей: 21,5-дюйм; Размеры: 800*490*780-1080mm(±20mm)',
  },
  {
    id: 50,
    name: 'Аудиовизуальный подиум SP-Y750A',
    href: 'https://protouch.uz/%d0%b0%d1%83%d0%b4%d0%b8%d0%be%d0%b2%d0%b8%d0%b7%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc-sp-y750a/',
    imageSrc: ElektronTruba10,
    imageAlt: "ElektronTruba",
    price: 'Цена договорная',
    color: 'Процессор: Intel i5 11th; Озу: 16GB DDR4; Память: 512GB SSD; Дисплей: 21,5-дюйм; Напряжение: 110-240V, 50-60HZ; Размеры: 1000*715*1082mm',
  },
  {
    id: 51,
    name: 'Аудиовизуальный подиум S800SN',
    href: 'https://protouch.uz/%d0%b0%d1%83%d0%b4%d0%b8%d0%be%d0%b2%d0%b8%d0%b7%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc-s800sn/',
    imageSrc: ElektronTruba5,
    imageAlt: "ElektronTruba",
    price: 'Цена договорная',
    color: 'Процессор: Intel i7 11th; Озу: 16GB DDR4; Память: 512GB SSD; Дисплей: 21,5-дюйм; Напряжение: 110-240V, 50-60HZ.',
  },
  {
    id: 52,
    name: 'Аудиовизуальный подиум S700',
    href: 'https://protouch.uz/%d0%b0%d1%83%d0%b4%d0%b8%d0%be%d0%b2%d0%b8%d0%b7%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc-s700/',
    imageSrc: ElektronTruba9,
    imageAlt: "ElektronTruba",
    price: 'Цена договорная',
    color: 'Процессор: Intel i7 11th; Озу: 16GB DDR4; Память: 512GB SSD; Дисплей: 21,5-дюйм; Напряжение: 110-240 В, 50-60 Гц.',
  },
  {
    id: 53,
    name: 'Аудиовизуальный подиум FK535N',
    href: 'https://protouch.uz/%d0%b0%d1%83%d0%b4%d0%b8%d0%be%d0%b2%d0%b8%d0%b7%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc-fk535n/',
    imageSrc: ElektronTruba4,
    imageAlt: "ElektronTruba",
    price: 'Цена договорная',
    color: 'Процессор: Intel i7 11th; Озу: 16GB DDR4; Память: 512GB SSD; Дисплей: 23,6-дюйм; Входной кабельный блок ноутбука: HDMI*1, Type-C*1, Audio*1; Напряжение: 110-240 В, 50-60 Гц',
  },
  {
    id: 54,
    name: 'Аудиовизуальный подиум FK535K',
    href: 'https://protouch.uz/%d0%b0%d1%83%d0%b4%d0%b8%d0%be%d0%b2%d0%b8%d0%b7%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc-fk535k/',
    imageSrc: ElektronTruba3,
    imageAlt: "ElektronTruba",
    price: 'Цена договорная',
    color: 'Процессор: Intel i7 11th; Озу: 16GB DDR4; Память: 512GB SSD; Дисплей: 21,5-дюйм; Входной кабельный блок ноутбука: HDMIx1, USBx1; Напряжение: 110-240 В, 50-60 Гц',
  },
  {
    id: 55,
    name: 'Аудиовизуальный подиум PROT-FK500Y',
    href: 'https://protouch.uz/%d0%b0%d1%83%d0%b4%d0%b8%d0%be%d0%b2%d0%b8%d0%b7%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc-prot-fk500y/',
    imageSrc: ElektronTruba2,
    imageAlt: "ElektronTruba",
    price: 'Цена договорная',
    color: 'Размеры продукта: 765x650x1160мм.; Память: 512GB SSD; Озу: 16GB DDR4; Операционная система: Windows 10/11; Дисплей: 21,5-дюйм; Процессор: Intel i7 11th; Напряжение: 110-240В, 50-60 Гц.',
  },
  {
    id: 56,
    name: 'Аудиовизуальный подиум PROT-FK500V',
    href: 'https://protouch.uz/%d0%b0%d1%83%d0%b4%d0%b8%d0%be%d0%b2%d0%b8%d0%b7%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc-prot-fk500v/',
    imageSrc: ElektronTruba8,
    imageAlt: "ElektronTruba",
    price: 'Цена договорная',
    color: 'Размеры продукта: 765x650x1160 мм; Память: 512GB SSD; Озу: 16Gb DDR4; Операционная система: Windows 10/11; Дисплей: 21,5-дюйм; Процессор : Intel i7 11th; Напряжение: 110-240В, 50-60 Гц.',
  },
  {
    id: 57,
    name: 'Цифровая трибуна PROT12 21.5',
    href: 'https://protouch.uz/%d1%86%d0%b8%d1%84%d1%80%d0%be%d0%b2%d0%b0%d1%8f-%d1%82%d1%80%d0%b8%d0%b1%d1%83%d0%bd%d0%b0-prot12-21-5%e2%80%b3/',
    imageSrc: ElektronTruba1,
    imageAlt: "ElektronTruba",
    price: 'Цена договорная',
    color: "Диагональ экрана: 21,5'' FullHD; Монитор: Сенсорный до 10 касаний; Микрофон: Гибкий и LED подсветка; Интерфейс: USB,MIC,HDMI,network port, VGA, HDMI, DVI; Особенность: Съемная рукоятка; Размер изделия: 730х476х(1050х1200)мм; Объемный вес: 100 кг; Материал: Авиационный алюминий; Перемещение: 4 колеса; Гарантия: 12 месяцев",
  },

  // Klaviatura
  {
    id: 58,
    name: 'HP C2710 Combo Keyboard ENG',
    href: 'https://protouch.uz/hp-c2710-combo-keyboard-eng/',
    imageSrc: klaviatura1,
    imageAlt: "Klaviatura",
    price: '403 000 сум',
    color: 'Размеры (Ш x Г x В), см: 50.2 x 15.8 x 4.2; Вес, кг: 0.69; Размеры в упаковке (Ш x Г x В), см: 16 x 51.5 x 5; Вес в упаковке, кг: 1',
  },
  {
    id: 59,
    name: 'HP 230 Wireless Mouse and Keyboard Combo (White) RUSS',
    href: 'https://protouch.uz/hp-230-wireless-mouse-and-keyboard-combo-white-russ/',
    imageSrc: klaviatura2,
    imageAlt: "Klaviatura",
    price: '440 000 сум',
    color: 'Тип устройства: Комплект; Транспортировочные размеры: 4.50 см x 46.00 см x 22.51 см; Вес с упаковкой: 0.85 кг; Рейтинг бестселлеров: #7 в Комплекты клавиатура+мышь; Артикул Microless: 98008',
  },
  {
    id: 60,
    name: 'HP 230 Wireless Mouse and Keyboard Combo RUSS',
    href: 'https://protouch.uz/hp-230-wireless-mouse-and-keyboard-combo-russ/',
    imageSrc: klaviatura3,
    imageAlt: "Klaviatura",
    price: '416 000 сум',
    color: 'Тип устройства: Комплект; Вес, гр: 0.5 кг (клавиатура), 0.06 кг (мышь); Количество кнопок: 3; Размеры: 44 x 14.62 x 2.76 см (клавиатура); 6.33 x 11.5 x 3.62 см (мышь); Наличие колесика: Да; Интерфейс подключения к ПК: USB; Тип соединения: Беспроводное; Комплектация: Клавиатура, мышь, информация о продукте, карточка с важной информацией об устройстве радиосвязи; Дизайн: Для правой и левой руки',
  },
  {
    id: 61,
    name: 'HP Pavilion Wireless Keyboard and Mouse 800 (White) RUSS',
    href: 'https://protouch.uz/hp-pavilion-wireless-keyboard-and-mouse-800-white-russ/',
    imageSrc: klaviatura4,
    imageAlt: "Klaviatura",
    price: '840 000 сум',
    color: 'Интерфейс подключения: USB; Цифровой блок: есть; Тип мыши: оптическая светодиодная; Цвет: белый; Радиус действия беспроводной связи: 10 м; Тип: мембранная; Конструкция клавиатуры: классическая; Количество клавиш мыши: 3; Разрешение оптического сенсора: 1000 dpi; Количество клавиш клавиатуры: 104',
  },
  {
    id: 62,
    name: 'HP Pavilion Wireless Keyboard and Mouse 800 (Black) RUSS',
    href: 'https://protouch.uz/hp-pavilion-wireless-keyboard-and-mouse-800-black-russ/',
    imageSrc: klaviatura5,
    imageAlt: "Klaviatura",
    price: '799 000 сум',
    color: 'Тип устройства: Комплект; Вид клавиатуры: Стандартная; Тип клавиатуры: Мембранные; Особености: Мышь в комплекте; Цвет: Чёрный; Подключение: Беспроводное; Интерфейс: USB',
  },
  {
    id: 63,
    name: 'HP Pavilion Keyboard and Mouse 200 RUSS',
    href: 'https://protouch.uz/hp-pavilion-keyboard-and-mouse-200-russ/',
    imageSrc: klaviatura6,
    imageAlt: "Klaviatura",
    price: '297 000 Сум',
    color: 'Интерфейс: USB; Комплектация набора: 2 в 1; Количество кнопок мыши: 3; Совместимость с ОС: Microsoft Windows; Количество кнопок клавиатуры: 116; Тип датчика: оптический; DPI: 1600',
  },
  {
    id: 64,
    name: 'HP Pavilion Wired Keyboard and Mouse 400 RUSS',
    href: 'https://protouch.uz/hp-pavilion-wired-keyboard-and-mouse-400-russ/',
    imageSrc: klaviatura7,
    imageAlt: "Klaviatura",
    price: '368 000 сум',
    color: 'Тип устройства: Комплект; Вид клавиатуры: Стандартная; Тип клавиатуры: Механические; Цвет: Чёрный; Подключение: Проводное; Интерфейс: USB',
  },
  {
    id: 65,
    name: 'Lenovo 300 USB Combo Keyboard & Mouse — Russian/Cyrillic (441)',
    href: 'https://protouch.uz/lenovo-300-usb-combo-keyboard-mouse-russian-cyrillic-441/',
    imageSrc: klaviatura8,
    imageAlt: "Klaviatura",
    price: '356 000 сум',
    color: 'Тип устройства: Клавиатура; Вид клавиатуры: Стандартная; Тип клавиатуры: Мембранные; Цвет: Чёрный; Подключение: Проводное; Интерфейс: USB',
  },
  {
    id: 66,
    name: 'Dell Pro Wireless Keyboard and Mouse — KM5221W — Russian (QWERTY) (RTL BOX)',
    href: 'https://protouch.uz/dell-pro-wireless-keyboard-and-mouse-km5221w-russian-qwerty-rtl-box/',
    imageSrc: klaviatura9,
    imageAlt: "Klaviatura",
    price: '34 000 сум',
    color: 'Brand: DELL; Комплект: Клавиатура + мышь; Тип подключения: Беспроводное; Цвет: Black',
  },

  // Мыши
  {
    id: 67,
    name: 'Wireless Optical Mouse 2.4G, black, retail packaging',
    href: 'https://protouch.uz/wireless-optical-mouse-2-4g-black-retail-packaging/',
    imageSrc: Mishka1,
    imageAlt: "Mishka",
    price: '192 000 сум',
    color: 'Бренд: Acer; Разрешение сенсора: 1000 dpi; Тип сенсора мыши : оптический светодиодный; Кол-во кнопок: 3; Тип подключения: беспроводное; Бесшумные кнопки: нет; Интерфейс подключения: USB; Подсветка: нет',
  },
  {
    id: 68,
    name: 'PREDATOR CESTUS 310 GAMING MOUSE',
    href: 'https://protouch.uz/predator-cestus-310-gaming-mouse/',
    imageSrc: Mishka2,
    imageAlt: "Mishka",
    price: '427 000 сум',
    color: 'Игровая: Да; Форма: для правшей; Длина кабеля, м: 1,8; Интерфейс: USB Type A; Макс. разрешение датчика, dpi: 4200',
  },
  {
    id: 69,
    name: 'PREDATOR CESTUS 315 GAMING MOUSE',
    href: 'https://protouch.uz/predator-cestus-315-gaming-mouse/',
    imageSrc: Mishka3,
    imageAlt: "Mishka",
    price: '574 000 сум',
    color: 'Цвет: Черный; Игровая: Да; Форма: для правшей; Длина кабеля, м: 1,8; Частота опроса USB порта, Гц: 1000; Интерфейс: USB Type-A; Макс. разрешение датчика, dpi: 6500',
  },


  // More products...
]

function App() {
  return (
    <div className="bg-white w-full overflow-hidden">
      {/* Render Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 w-full">
        <h5 style={{fontFamily: 'The Youngest Serif'}} className="text-0.5xl text-red-500 text-center">Ushbu sayt hozirda test holatida ishlamoqda!</h5>
        <h2 style={{fontFamily: 'The Youngest Serif'}} className="text-2xl font-bold tracking-tight text-gray-500">ПРОДУКТЫ</h2>

        {/* Grid setup to ensure two columns on smaller screens */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 w-full">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Product image */}
              <a style={{fontFamily: 'The Youngest Serif'}} href={product.href} target="_blank" rel="noopener noreferrer">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </a>

              {/* Product details */}
              <div className="mt-4 flex justify-between">
                <div className="w-full">
                  <h1 style={{fontFamily: 'The Youngest Serif'}} className="text-medium text-gray-700">
                    <a style={{fontFamily: 'The Youngest Serif'}} href={product.href} target="_blank" rel="noopener noreferrer">
                      {product.name}
                    </a>
                  </h1>
                  <p style={{fontFamily: 'The Youngest Serif'}} className="text-sm font-medium text-gray-900">{product.price}</p>
                  <p style={{fontFamily: 'The Youngest Serif'}} className="mt-1 text-sm text-gray-500">{product.color}</p>

                  {/* Order button for Telegram */}
                  <button
                    onClick={() => window.open("https://t.me/Protouch_office", "_blank")}
                    className="flex items-center space-x-1 text-white px-1 py-1 rounded hover:bg-blue-600 mt-2 text-[12px]"
                    style={{backgroundColor: '#4594ed'}}
                  >
                    <img src={basket} alt="Basket icon" className="h-4 w-4" />
                    <span style={{fontFamily: 'The Youngest Serif'}}>ЗАКАЗАТЬ</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;