#Bord4-styles

This repo is a bower component of all stylesheets used by Bergens Tidenes data journalism team, Bord4. The styles are a custom [Twitter Bootstrap](https://github.com/twbs/bootstrap) build with extra styles that we use often. All fonts referenced in this project are copyrighted. Everything else is MIT licensed.

##Documentation in Norwegian

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

2. Pass på at du importerer Bord4 styles i din main.scss slik:
```@import 'bord4-styles/src/styles/bt_bootstrap';```

3. For å hente nyeste versjon av BT styles i prosjekt der du allerede har Bord4 styles installert kjør:
```bower update bord4-styles```