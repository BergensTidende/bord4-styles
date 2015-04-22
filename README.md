#Bord4-styles

Dette er et bower-komponent med BT Bord4s spesifikke Bootstrap stiler og tilpassede stiler.

## Utvikle pakken
* Clon repositoriet
* Kjør `npm install` og `bower install`
* Legg til dine stiler i styles-mappen. Husk å beholde filen bt_bootstrap.scss. Dette er hovedfilen som andre prosjekter importerer.
* Rediger evt test-siden i src/index.html. Det er denne du ser når du kjører grunt serve.
* Kjør `grunt serve` for å se endringene dine.
* Commit og push/synk endringer

## Bruke pakken/stilene i et prosjekt

1. Installer pakken i ditt prosjekt med:
```bower install git@github.com:BergensTidende/bord4-styles.git --save```

2. Pass på at du importerer BT styles i din main.scss slik:
```@import 'bord4-styles/src/styles/bt_bootstrap';```