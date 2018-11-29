### Réalisation de maquettes pour scanR basé sur la librairie [nivo](http://nivo.rocks)

A la base suivi du toto [Hello next](https://nextjs.org/learn/)

### Déploiement sur github pages

1. `npm run build`
2. `npm run export`
3. Rajouter dans le dossier out qui est apparu après l'export un fichier vide intitulé `.nojekyll`
car par défaut Github Pages ignore les dossiers qui commencent par '_'.
4. `npm run deploy`
