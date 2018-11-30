### Réalisation de maquettes pour scanR basé sur la librairie [nivo](http://nivo.rocks)

A la base suivi du toto [Hello next](https://nextjs.org/learn/)

### Déploiement sur github pages [non fonctionnel]

/!\ ne marche pas en fait

Le déploiement n'est pas aussi immédiat que lorsqu'on part d'un projet avec Create React App car il faut préciser que le dossier qui contient le site static est un sous-dosier et rajouter un fichier `.jenkyll` pour éviter que le dossier soit`_next` soit ignoré par Github Pages.

Suivre ce [tuto](https://medium.com/@anotherplanet/git-tips-next-js-github-pages-2dbc9a819cb8) pour les étapes du déploiement.

L'intégration continue n'est pas mis en place mais pour déployer il suffit de faire `npm run deploy` comme les étapes du tuto ont déjà été faites.
