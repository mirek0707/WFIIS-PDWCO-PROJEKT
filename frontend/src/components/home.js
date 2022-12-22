import { React } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {

    return (
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center homesite" bis_skin_checked="1">
            <div class="col-md-5 p-lg-5 mx-auto my-5" bis_skin_checked="1">
                <h1 class="display-4 font-weight-normal">Projekt PDwCO</h1>
                <p class="lead font-weight-normal">Projekt wykonany na zajęcia z Przetwarzania danych w chmurach obliczeniowych</p>
            </div>
            <div class="product-device box-shadow d-none d-md-block" bis_skin_checked="1"></div>
            <div class="product-device product-device-2 box-shadow d-none d-md-block" bis_skin_checked="1"></div>
        </div>
    )
}