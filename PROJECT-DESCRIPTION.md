Demo: https://h3dePL.github.io/layout_miami/

# Opis Projektu

Ten projekt to responsywny landing page zbudowany w HTML i SCSS.
Prezentuje uklad skupiony na produkcie: sekcje hero, galerie, karty produktow, formularz kontaktowy oraz rozwijane menu nawigacyjne.

## Glowny Cel

Celem bylo przygotowanie czystej, prostej i responsywnej struktury strony z wielokrotnie uzywalnymi stylami oraz spojnym zachowaniem interakcji.

## Zastosowane Techniki

1. Semantyczna struktura HTML

- Sekcje zbudowane z uzyciem semantycznych elementow: header, nav, main, section, article, form.
- Znaczace teksty alt i atrybuty aria-label poprawiajace dostepnosc.

2. Nazewnictwo klas w stylu BEM

- Wzorzec nazw blokow i elementow uzyty w calych stylach dla przewidywalnej struktury.
- Podzial stylow na pliki blokow dla latwiejszego utrzymania.

3. Architektura SCSS

- Style podzielone na pliki narzedziowe i pliki blokow.
- Osobne pliki dla zmiennych, mixinow, extends i typografii.
- Glowny plik importow: src/styles/main.scss.

4. Wspolne tokeny stylu

- Globalny kolor tekstu wyciagniety do zmiennej SCSS.
- Ta sama zmienna koloru uzywana w wielu komponentach dla spojnosci.

5. Responsywnosc

- Podejscie mobile-first z breakpointami dla tabletu i desktopu.
- Korekty odstepow, rozmiarow ikon i wymiarow obrazow na wiekszych ekranach.

6. Interakcje i efekty hover

- Stany hover dla linkow nawigacyjnych i kontaktowych.
- Efekt skalowania obrazow w galerii i sekcjach produktowych.
- Zachowanie hover tylko na desktopie dla ikony burgera i etykiety numeru telefonu.

7. Zachowanie menu overlay (tylko CSS)

- Pelnoekranowe, fixed menu otwierane przez hash URL.
- Plynne przejscie oparte o transform.
- Kontrola pointer-events, aby ukryta warstwa nie przechwytywala interakcji.
- Obsluga przewijania pionowego menu przy nadmiarze tresci.

8. Podstawy formularza

- Natywna walidacja HTML z wymaganymi polami i typem email.
- Czytelne placeholdery podpowiadajace uzytkownikowi dane wejsciowe.

9. Detale UX

- Plynne przewijanie dla anchorow na stronie.
- Reset marginesow naglowkow dla przewidywalnych odstepow.
- Klikalne dane kontaktowe (telefon, email, adres z linkiem do Google Maps).

## Stos Technologiczny

- HTML5
- SCSS (Sass)
- Vite (przez Mate scripts)
- Stylelint + Prettier

## Struktura Projektu (style)

- src/styles/main.scss: globalne importy i style bazowe.
- src/styles/utils: zmienne, mixiny, extends.
- src/styles/blocks: pliki SCSS dla poszczegolnych komponentow.

## Uwagi

Implementacja skupia sie na czytelnosci i prostocie, bez nadmiernego komplikowania.
Kod zostal ulozony tak, aby byl latwy do czytania, aktualizacji i dalszego rozwoju.
