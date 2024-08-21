import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            ProductCatalog: "Product Catalog",
            loading: "Loading...",
            categories: "Categories",
            all: "All",
            filters: "Filters",
            searchByTitle: "Search by title",
            minPrice: "Minimum Price",
            maxPrice: "Maximum Price",
            sortProducts: "Sort Products",
            priceLowToHigh: "Price: Low to High",
            priceHighToLow: "Price: High to Low",
            ratingLowToHigh: "Rating: Low to High",
            ratingHighToLow: "Rating: High to Low",
            products: "Products",
            price: "Price",
            addToCart: "Add to Cart",
        },
    },
    es: {
        translation: {
            ProductCatalog: "Catálogo de productos",
            loading: "Cargando...",
            categories: "Categorías",
            all: "Todo",
            filters: "Filtros",
            searchByTitle: "Buscar por título",
            minPrice: "Precio mínimo",
            maxPrice: "Precio máximo",
            sortProducts: "Ordenar productos",
            priceLowToHigh: "Precio: bajo a alto",
            priceHighToLow: "Precio: alto a bajo",
            ratingLowToHigh: "Calificación: baja a alta",
            ratingHighToLow: "Calificación: alta a baja",
            products: "Productos",
            price: "Precio",
            addToCart: "Agregar al carrito",
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // Initial language
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
