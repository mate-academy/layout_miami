# MyBiKE - Professional Frontend Layout

Projekt nowoczesnego, responsywnego landing page'a, stworzony z dużym naciskiem na *czystą architekturę CSS* oraz *reużywalność kodu* na podstawie projektu z Figmy.

## Live Demo
*[ZOBACZ PROJEKT NA ŻYWO](https://pawel-florczyk.github.io/layout_miami/)*

## Architektura Stylów i Design Tokens
W projekcie zastosowano profesjonalne podejście do zarządzania stylami, oparte na systemie *Design Tokens*. Pozwala to na pełną kontrolę nad warstwą wizualną z jednego miejsca:

* *Normalizacja i Optymalizacja*: Samodzielnie ujednoliciłem wartości odstępów oraz wielkości czcionek z projektu na platformie Figma. Dzięki usunięciu przypadkowych, zbliżonych wartości, kod stał się spójny, bardziej czytelny i łatwiejszy w utrzymaniu.
* *Variables System*: Pełna centralizacja ustawień projektu w pliku _variables.scss.
    * *Typography*: Skalowalne rozmiary czcionek i system interlinii.
    * *Spacing System*: Spójne odstępy sekcji oraz mikro-odstępy.
    * *Functional Colors*: Mapowanie kolorów bazowych na nazwy funkcjonalne (np. $color-title-header).
    * *Component Tokens*: Wydzielone zmienne dla przycisków (np. $btn-height, $btn-radius).
* *BEM Methodology*: Czytelne nazewnictwo klas, ułatwiające rozwój i konserwację kodu.

## Kluczowe Funkcjonalności i Poprawki
* *Poprawka UX/UI (Header Image)*: Wprowadziłem autorską poprawkę względem projektu graficznego – zdjęcie w sekcji Hero zostało zoptymalizowane tak, aby zawsze wypełniało pełną wysokość ekranu (100vh), co zapewnia lepszy efekt wizualny na różnych monitorach.
* *Full Responsive Design*: System autorskich mixinów zapewniający pełną responsywność.
* *Optymalizacja Layoutu*: Wykorzystanie CSS Grid i Flexbox do stworzenia stabilnej siatki strony.

## Technologie
* HTML5 (Semantyczna struktura)
* SCSS (Architektura zmiennych, mixiny, BEM)

## Jak uruchomić lokalnie?
1. Sklonuj repozytorium na swój dysk.
2. Otwórz plik index.html w przeglądarce lub skorzystaj z wtyczki *Live Server* w VS Code.
