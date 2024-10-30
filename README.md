# Our Intenters

`OurIntenters` est une application permettant de gérer les utilisateurs d'Intent Technologies.
On peut lire les infos d'un (des) utilisateur(s), et/ou modifier ses informations.

L'application (qui consiste pour l'instant en une simple API de type REST) est plus ou moins opérationnelle, mais il y a quelques améliorations à apporter. On compte sur toi !

## Le projet:

Il faut essayer d'améliorer l'application sur plusieurs aspects :

- détection et correction de bugs
- ajout/amélioration des fonctionnalités
- amélioration de la qualité (lisibilité, typage, tests)
- amélioration des performances

### Installation

```sh
npm i

# Crééer une branche avec ton prenom-nom
git checkout -b prenom-nom

# lancer le serveur de test
npm start

# lancer les tests unitaires
npm test

# Pour vérfier que l'application compile
npm run build
```

## Exercice 1: "petites" réparations

**Objectif**: S'occuper d'un maximum de `TODOs` laissés dans le code.

Le développeur de l'application a laissé plusieurs `TODO` dans le code. Ce sont les endroits où on a détecté qu'on pouvait améliorer des choses, mais on en a peut-etre oublié ! A voir si tu peux/veux t'en occuper et dans quel ordre.

> _Rappelle toi, chez Intent on essaye de travailler en petits scopes livrables et démontrables. A toi de t'organiser dans le temps imparti pour faire ce que tu considère le plus prioritaire_

- Pour l'instant, l'appli ne compile pas et on ne peut donc pas la déployer (`npm run build` donne une erreur), il faudrait sans doute régler ce problème en priorité
- Tu es libre d'utiliser toutes les librairies que tu veux, mais y a pas forcément besoin.
- N'hésite pas à ajouter des tests sur les points que tu juges importants. Cela dit, on ne vise pas forcément un coverage de 100%, à toi de décider.

## Exercice 2: "On trouve rien !!"

**Objectif**: Réparer la recherche

L'application possède une route de recherche d'utilisateur par email. Mais ca ne fonctionne pas, on n'obtient jamais de résultat, et ce même si on donne un `email` dont on a vérifié l'existence au préalable.

Essaye de voir ce que tu peux faire pour améliorer ça. N'hésite pas à faire du vide dans le code existant si besoin.

## Derniers mots

Ce test nous permet de voir comment on pourra travailler ensemble de la meilleure des façons.
Nous savons que c'est un exercice qui peut être stressant, voire franchement pénible. Rapelle toi : nous ne sommes pas là pour te juger mais simplement pour voir comment tu travailles.

Développe comme tu as l'habitude de le faire, n'essaye surtout pas de changer ta façon de faire ! N'hésite pas à poser des questions si tu as des doutes, à nous dire si tu ne te sens pas bien, si tu es bloqué, si tu as un problème ou si tu ne veux pas faire le test. Pas de pression !

### Ce qu'on va regarder

- ta capacité à te plonger dans une codebase existante et à te l'approprier
- ta capacité à engager des changements et à les prioriser
- ta capacité à comprendre des specs parfois floues/incomplètes
- ta capacité à produire du code clair et maintenable
- ta capacité à utiliser Git
- ... et plein d'autres trucs !
