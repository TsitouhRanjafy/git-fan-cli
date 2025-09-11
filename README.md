## Git Follow Manager (GFM)

Git Follow Manager (gfm.js) est un outil en ligne de commande pour gérer facilement vos abonnements et abonnés sur GitHub. Il vous permet de suivre, se désabonner, et analyser votre réseau GitHub directement depuis le terminal.

## Installation

- Windows

    ```batch
    git clone git@github.com:TsitouhRanjafy/git-follow-manager.git
    cd git-follow-manager
    npm ci 
    ```
    
    vérifier:   
    ```bash
    node gfm.js --version
    ```

- Linux / macOS 

    ```shell
    git clone git@github.com:TsitouhRanjafy/git-follow-manager.git
    cd git-follow-manager
    npm ci
    chmod +x index.js
    ```

    vérifier:   
    ```bash
    ./gfm.js --version
    ``` 

## Utilisation  


```bash
./gfm.js <commande> [options]
```

| Commande                   | Description                                                           |
| -------------------------- | --------------------------------------------------------------------- |
| `gfm.js login`             | S’identifier sur GitHub                                               |
| `gfm.js followers`         | Affiche les utilisateurs qui vous suivent                             |
| `gfm.js following`         | Affiche les utilisateurs que vous suivez                              |
| `gfm.js follow`            | S’abonner à un utilisateur                                            |
| `gfm.js unfollow`          | Se désabonner d’un utilisateur                                        |
| `gfm.js auto-follow`       | S’abonner automatiquement à tous ceux qui vous suivent                |
| `gfm.js auto-unfollow`     | Se désabonner de ceux qui ne vous suivent pas en retour               |
| `gfm.js not-followed-back` | Affiche les utilisateurs que vous suivez mais qui ne vous suivent pas |
| `gfm.js not-follow-back`   | Affiche les utilisateurs qui vous suivent mais que vous ne suivez pas |


| Option          | Description                  |
| --------------- | ---------------------------- |
| `-h, --help`    | Affiche l’aide               |
| `-v, --version` | Affiche le numéro de version |


## Exemple

- Demande de l'aide pour un command

    ```bash
    ./gfm.js auto-follow -h
    ```

- Exporter en json tout les utilisateurs que vous suivez mais pas retoure

    ```bash
    ./gfm.js not-followed-back -e ./
    ```
    vous avez créer un fichier `not-followed-back.json`



- Désabonner automatiquement à tout l'utilisateur qui vous abonné mais pas en retour sauf quelque utilisateur

    json schema `user.json`

    ```json
    [
        { "user_name" : "KiritoEM" },
        { "user_name" : "DMikaia" },
        { "user_name" : "marioralison" }
    ]
    ```

    ```bash
    ./gfm.js auto-unfollow --ignore --json user.json
    ```



## Demo 

<video src="https://github.com/user-attachments/assets/3bea6b4c-3c23-4781-987f-9bdc69aef818"/>
