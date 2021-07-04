var vrfLight1;
var vrfLight2;
var vrfLight3;

function Connect() {
    var selectedModule = document.getElementById("selectModule").value;
    /* Vérification si on a choisis un module */
    if(selectedModule == '') {
        /* Mets un Pop-Up d'erreur */
        window.alert("Sélectionnez un module pour vous connecter !");
    }
    else {
        /* Désactivation le boîte déroulante */
        document.getElementById("selectModule").disabled = true;
        document.getElementById("selectModule").style.cursor = 'not-allowed';
        /* Désactivation du bouton de connexion */
        document.getElementById("btnConnexion").disabled = true;
        document.getElementById("btnConnexion").style.cursor = 'not-allowed';
        /* Activation du bouton de déconnexion */
        document.getElementById("btnDisconnect").disabled = false;
        document.getElementById("btnDisconnect").style.cursor = 'pointer';
        /* Éclaircissement de la rubrique "divInformation" */
        document.getElementById("divInformation").style.opacity = '1';
        /* Mise à jour de l'état de connexion */
        document.getElementById("txtConnexion").innerHTML = '✅ Connexion établie ✅'
        document.getElementById("txtConnexion").style.color = 'green';
        /* Activation du bouton de refresh */
        document.getElementById("btnRefresh").disabled = false;
        document.getElementById("btnRefresh").style.cursor = 'pointer';
        /* Mise à jour du nom du module */
        document.getElementById("txtName").innerHTML = 'Nom du module : ' + selectedModule;
        /* Mise à jour de l'IP du module */
        document.getElementById("txtIP").innerHTML = 'IP du module : 127.0.0.1:5500';
        /* Mise à jour de la date et l'heure locale */
        var hour = new Date();
        document.getElementById("txtTime").innerHTML = 'Date et heure locale : ' + hour.getUTCDate() + '/' + (hour.getMonth()+1) + '/' + hour.getFullYear() + ' - ' + hour.getHours() + ':' + hour.getUTCMinutes() + ':' + hour.getSeconds();
        /* Mise à jour du pourcentage de la batterie */
        document.getElementById("txtBattery").innerHTML = 'Pourcentage de la batterie : ' + 100 + '%';
        /* Éclaircissement de la rubrique "divLight" */
        document.getElementById("divLight").style.opacity = '1';
        /* Activation du bouton de la lumière 1 */
        document.getElementById("btnLight1").disabled = false;
        document.getElementById("btnLight1").style.cursor = 'pointer';
        /* Activation du bouton de la lumière 2 */
        document.getElementById("btnLight2").disabled = false;
        document.getElementById("btnLight2").style.cursor = 'pointer';
        /* Activation du bouton de la lumière 3 */
        document.getElementById("btnLight3").disabled = false;
        document.getElementById("btnLight3").style.cursor = 'pointer';
        /* Lance la function Light1() */
        Light1()
        /* Lance la function Light2() */
        Light2()
        /* Lance la function Light3() */
        Light3()
        /* Éclaircissement de la rubrique "divScreen" */
        document.getElementById("divScreen").style.opacity = '1';
        /* Activation de la boîte de discussion */
        document.getElementById("txtScreen").disabled = false;
        document.getElementById("txtScreen").style.cursor = 'auto';
        /* Activation du bouton d'envoie */
        document.getElementById("btnSend").disabled = false;
        document.getElementById("btnSend").style.cursor = 'pointer';
    }
}

function Disconnect() {
    /* Activation de la boîte déroulante */
    document.getElementById("selectModule").disabled = false;
    document.getElementById("selectModule").style.cursor = 'auto';
    /* Activation du bouton de connexion */
    document.getElementById("btnConnexion").disabled = false;
    document.getElementById("btnConnexion").style.cursor = 'auto';
    /* Désactivation du bouton de déconnexion */
    document.getElementById("btnDisconnect").disabled = true;
    document.getElementById("btnDisconnect").style.cursor = 'not-allowed';
    /* Mise à 0 de la boîte déroulante */
    document.getElementById("selectModule").value = '';
    /* Remise à 0 du texte */
    document.getElementById("txtConnexion").innerHTML = '⚠️ Sélectionnez un module pour vous connecter ⚠️';
    document.getElementById("txtConnexion").style.color = 'red';
    /* Désactivation du bouton du refresh */
    document.getElementById("btnRefresh").disabled = true;
    document.getElementById("btnRefresh").style.cursor = 'not-allowed';
    /* Assombrissement de la rubrique "divInformation" */
    document.getElementById("divInformation").style.opacity = '0.7';
    /* Remise à 0 du texte */
    document.getElementById("txtName").innerHTML = 'Nom du module : Connectez vous à un module';
    /* Remise à 0 du texte */
    document.getElementById("txtIP").innerHTML = 'IP du module : Connectez vous à un module';
    /* Remise à 0 du texte */
    document.getElementById("txtTime").innerHTML = 'Date et heure locale : Connectez vous à un module';
    /* Remise à 0 du texte */
    document.getElementById("txtBattery").innerHTML = 'Pourcentage de la batterie : Connectez vous à un module';
    /* Assombrissement de la rubrique "divLight" */
    document.getElementById("divLight").style.opacity = '0.7';
    /* Remise à 0 du texte */
    document.getElementById("txtLight1").innerHTML = 'Connectez vous à un module';
    /* Désactivation du bouton de la lumière 1 */
    document.getElementById("btnLight1").disabled = true;
    document.getElementById("btnLight1").style.cursor = 'not-allowed';
    document.getElementById("btnLight1").innerHTML = 'Connectez vous à un module';
    /* Remise à 0 du texte */
    document.getElementById("txtLight2").innerHTML = 'Connectez vous à un module';
    /* Désactivation du bouton de la lumière 2 */
    document.getElementById("btnLight2").disabled = true;
    document.getElementById("btnLight2").style.cursor = 'not-allowed';
    document.getElementById("btnLight2").innerHTML = 'Connectez vous à un module';
    /* Remise à 0 du texte */
    document.getElementById("txtLight3").innerHTML = 'Connectez vous à un module';
    /* Désactivation du bouton de la lumière 3 */
    document.getElementById("btnLight3").disabled = true;
    document.getElementById("btnLight3").style.cursor = 'not-allowed';
    document.getElementById("btnLight3").innerHTML = 'Connectez vous à un module';
    /* Assombrissement de la rubrique "divScreen" */
    document.getElementById("divScreen").style.opacity = '0.7';
    /* Désactivation de la boîte de discussion */
    document.getElementById("txtScreen").disabled = true;
    document.getElementById("txtScreen").style.cursor = 'not-allowed';
    /* Désactivation du bouton d'envoie */
    document.getElementById("btnSend").disabled = true;
    document.getElementById("btnSend").style.cursor = 'not-allowed';
}

function Refresh() {
    /* Actualisation de la date et de l'heure locale */
    var hour = new Date();
    document.getElementById("txtTime").innerHTML = 'Date et heure locale : ' + hour.getUTCDate() + '/' + (hour.getMonth()+1) + '/' + hour.getFullYear() + ' - ' + hour.getHours() + ':' + hour.getUTCMinutes() + ':' + hour.getSeconds();
    /* Actualisation du pourcentage de la batterie */
    document.getElementById("txtBattery").innerHTML = 'Pourcentage de la batterie : ' + 100 + '%';
}

function Light1() {
    /* Vérification de l'état de la lumière n°1 */
    if(vrfLight1 == 0) {
        /* Mise à la bonne valeur */
        vrfLight1 = 1;
        /* Mise à jour du texte de l'état de la lumière n°1 */
        document.getElementById("txtLight1").innerHTML = 'Éteint';
        /* Mise à jour du texte du bouton de la lumière n°1 */
        document.getElementById("btnLight1").innerHTML = 'Allumer';
    }else {
        /* Mise à la bonne valeur */
        vrfLight1 = 0;
        /* Mise à jour du texte de l'état de la lumière n°1 */
        document.getElementById("txtLight1").innerHTML = 'Allumé';
        /* Mise à jour du texte du bouton de la lumière n°1 */
        document.getElementById("btnLight1").innerHTML = 'Éteindre';
    }
}

function Light2() {
    /* Vérification de l'état de la lumière n°2 */
    if(vrfLight2 == 0) {
        /* Mise à la bonne valeur */
        vrfLight2 = 1;
        /* Mise à jour du texte de l'état de la lumière n°2 */
        document.getElementById("txtLight2").innerHTML = 'Éteint';
        /* Mise à jour du texte du bouton de la lumière n°2 */
        document.getElementById("btnLight2").innerHTML = 'Allumer';
    }else {
        /* Mise à la bonne valeur */
        vrfLight2 = 0;
        /* Mise à jour du texte de l'état de la lumière n°2 */
        document.getElementById("txtLight2").innerHTML = 'Allumé';
        /* Mise à jour du texte du bouton de la lumière n°2 */
        document.getElementById("btnLight2").innerHTML = 'Éteindre';
    }
}

function Light3() {
    /* Vérification de l'état de la lumière n°3 */
    if(vrfLight3 == 0) {
        /* Mise à la bonne valeur */
        vrfLight3 = 1;
        /* Mise à jour du texte de l'état de la lumière n°3 */
        document.getElementById("txtLight3").innerHTML = 'Éteint';
        /* Mise à jour du texte du bouton de la lumière n°3 */
        document.getElementById("btnLight3").innerHTML = 'Allumer';
    }else {
        /* Mise à la bonne valeur */
        vrfLight3 = 0;
        /* Mise à jour du texte de l'état de la lumière n°3 */
        document.getElementById("txtLight3").innerHTML = 'Allumé';
        /* Mise à jour du texte du bouton de la lumière n°3 */
        document.getElementById("btnLight3").innerHTML = 'Éteindre';
    }
}

function txtScreen() {
    /* Vérification si la boîte de discussion est de base */
    if(document.getElementById("txtScreen").value == "Écrivez ici...") {
        /* Surppimation du texte en cas de clique et si la boîte de discussion est de base */
        document.getElementById("txtScreen").value = "";
    }
}

function Send() {
    /* Détermine une variable "write" avec l'écriture actuel de la boîte de discussion */
    var write = document.getElementById("txtScreen").value;
    /* Mise à jour du texte actuel à l'écran */
    document.getElementById("txtActualScreen").innerHTML = write;
    /* Pop-Up montrant ce qu'on envoie */
    window.alert("Vous envoyez : \"" + write + "\" sur l'écran");
    /* Remise à 0 de la boîte de discussion */
    document.getElementById("txtScreen").value = "Écrivez ici...";
}