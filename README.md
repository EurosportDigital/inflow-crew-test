# Inflow Crew test

## Ce qu'on regarde 
- clarté  
- tests  
- factorisation

## Objectif

A partir du fichier [headtohead.json](https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json) :
- récupérer uniquement les players masculins
- trier les players sur le rank DESC 
- formater les player de manière à avoir en sortie id, firstname, lastname, countryCode
- (optional) ajouter à la payload une propriété playout contenant le dernier objet créé de l'array playouts en status READY 


Récupérer la payload et la sauvegarder dans un fichier json sur S3
- le nom du bucket est présent dans une var d'env BUCKET_NAME
