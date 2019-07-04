## Wild Code School Project (Candidature alternance)

### Technologies utilisées
- React
- Mongodb/Mongoose
- Node.js/express => https://github.com/orohellec/wild-code-school-back

### Concept de l'application
Ceci est une petite application permettant de rechercher des films par catégories et par saisi de l'utilisateur.
L'application utilise la base de donnée de l'api movie databse pour aller rechercher les films.
Il est aussi possible de créer un compte et d'ajouter des films à sa liste d'envie. Dans ce cas les utilisateurs et les films
dans leur liste d'envie seront stockés dans ma propre base de donnée (mongodb - voir repo wild-code-school-back)
Il est bien sur aussi possible de retirer des films de sa liste d'envie.

### Principales tâches à effectuer avant d'intégrer d'autres fonctionnalités
- L'application ne contient pour le moment aucun test
- L'application n'est pas encore sécurisé contre les attaques CSRF.
- La gestion des erreurs aussi bien côté front que back n'est pas optimisé. (beaucoup de console.log(err) à remplacer)
- Besoin de refactoriser l'application et d'intégrer Redux. (ce que je suis en train d'apprendre)
- L'application n'est pas en production pour le moment
- Le css est un peu baclé pour le moment
- Les entrées utilisateurs ne sont pas vérifiés pour le moment (je compte utiliser express-validator pour palier à ce problème)
- Petite erreur à patcher. Il est pour le moment possible d'ajouter deux fois le même film à sa liste d'envie.

#### !! Vous ne pouvez pas faire marcher l'application car il manque les variables d'environnement (clés api...) !!
=> (plus d'infos par email)

Comme vous pouvez le constater il reste énormément de choses à améliorer. Je vais continuer de travailler sur cette application pour m'entrainer (en plus cela fera quelquechose à ajouter à mon portfolio :) ). En attendant je vous montre ce que j'ai déjà fait dans le but de fixer un rendez vous au plus vite car le timing est serré pour trouver une alternance.
