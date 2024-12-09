import a from "../components/FTextContent.js";
/* empty css                          */
const m = {
  title: "Components/FTextContent",
  component: a
}, r = (u) => ({
  components: {
    FTextContent: a
  },
  setup: () => ({
    args: u
  }),
  template: '<FTextContent v-bind="args" />'
}), l = `
<h2 id="headers">Headers</h2>
<h2 id="this-is-a-heading-h2">This is a Heading h2</h2>
<h3 id="this-is-a-heading-h3">This is a Heading h3</h3>
<h4 id="this-is-a-heading-h4">This is a Heading h4</h4>
<h5 id="this-is-a-heading-h5">This is a Heading h5</h5>
<h6 id="this-is-a-heading-h6">This is a Heading h6</h6>
<h2 id="emphasis">Emphasis</h2>
<p>
  <em>This text will be italic</em><br />
  <em>This will also be italic</em>
</p>
<p>
  <strong>This text will be bold</strong><br />
  <strong>This will also be bold</strong>
</p>
<p>
  <em>You <strong>can</strong> combine them</em>
</p>
<p>Empty paragraphs should be removed...</p>
<p></p>
<p>​</p>
<p>   </p>
<p>&nbsp;</p>
<p>...so that this one is right below</p>
<h2 id="figures-and-tables>Figures and tables</h2>
<figure>
  <div>This is a Figure</div>
  <figcaption>This is the caption</figcaption>
</figure>
<table>
  <tbody>
    <tr>
      <td>Table</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>Hello</td>
      <td>
        <ul>
          <li>World</li>
          <li>Jupiter</li>
        </ul>
      </td>
    </tr>
  </tbody>
  <caption>This is the table caption</caption>
</table>
<h2 id="lists">Lists</h2>
<h3 id="unordered">Unordered</h3>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 2a</li>
  <li>
    <p>Item 2b</p>
  </li>
  <li>
    SubLists
    <ul>
      <li>SubItem 3a</li>
      <li>SubItem 3b</li>
      <li>SubItem 3c</li>
      <li>SubSubList
        <ul>
          <li>SubSubItem 3c1</li>
          <li>SubSubItem 3c2</li>
          <li>SubSubItem 3c3</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<h3 id="ordered">Ordered</h3>
<ol>
  <li><p>Item 1</p></li>
  <li>Item 2</li>
  <li>
    <p>Item 3</p>
    <ol>
      <li>Item 3a</li>
      <ol>
        <li>Item 3a.1</li>
      </ol>
      <li>Item 3b</li>
    </ol>
  </li>
</ol>
<h2 id="images">Images</h2>
<p>
  <img
    src="https://picsum.photos/400/600"
    alt="This is a alt text."
    title="This is a sample image."
  />
</p>
<h2 id="links">Links</h2>
<p>
  You may be using
  <a href="https://google.com">Links</a>.
</p>
<h2 id="blockquotes">Blockquotes</h2>
<blockquote>
  <p>
    Markdown is a lightweight markup language with plain-text-formatting syntax,
    created in 2004 by John Gruber with Aaron Swartz.
  </p>
  <blockquote>
    <p>
      Markdown is often used to format readme files, for writing messages in
      online discussion forums, and to create rich text using a plain text
      editor.
    </p>
  </blockquote>
</blockquote>
<h2 id="unallowed">Unallowed tags</h2>
<bdo dir="ltr">Bdo tags should be enabled by default.</bdo>
<div>Unallowed tags will render as plain text,<i>e.g.:</i></div>
<link>Text inside a \`link\` tag</link>
`, e = r.bind({});
e.args = {
  source: l
};
const t = r.bind({});
t.args = {
  source: l,
  dense: !0
};
const o = `<h2><strong>1. OBJET</strong></h2><h3><strong>Objet&nbsp;</strong></h3><p>Le service le<strong>vélo</strong> est un dispositif de vélos à assistance électrique en libre-service proposé par la Métropole Aix-Marseille Provence et dont l’exploitation et la gestion sont confiés à la société CITYBIKE GLOBAL à travers sa filiale CITYBIKE MEDITERRANEE.</p><h3><strong>Coordonnées du service client&nbsp;</strong></h3><p>Site internet :&nbsp; <a href="https://levelo.ampmetropole.fr">levelo.ampmetropole.fr</a></p><p>Courriel : <a href="mailto:levelo@ampmetropole.fr">levelo@ampmetropole.fr</a></p><p>Téléphone : 04 91 65 89 55 (coût d’une communication locale).&nbsp;</p><p>Adresse postale : CITYBIKE MEDITERRANEE 10 boulevard Ampère 13014 MARSEILLE &nbsp;</p><p>Le Service Client est joignable tous les jours par courrier, mail et téléphone : du lundi au samedi de 8h à 20h et le dimanche de 9h à 17h.</p><h2><strong>2. DÉFINITIONS&nbsp;</strong></h2><p><strong>Application :</strong> désigne le programme téléchargeable de façon gratuite et exécutable à partir du système d’exploitation (iOS ou Android) d’un smartphone ou d’une tablette. Ils permettent à tout Utilisateur du Service de trouver une station à proximité mais aussi de choisir un itinéraire adapté aux cyclistes, consulter le nombre de km parcourus, souscrire au Service, contacter le Service Client et déclarer un incident.&nbsp;</p><p><strong>Batterie communautaire :</strong> désigne la batterie intégrée au vélo&nbsp;</p><p><strong>Borne :</strong> mobilier urbain de la Station sur lequel viennent s’accrocher les vélos&nbsp;</p><p><strong>Compte :</strong> désigne le compte client créé par l’Utilisateur sur l’Application ou sur le Site Internet et lui permettant d’accéder au Service.&nbsp;</p><p><strong>CGUS :</strong> Conditions Générales d’Utilisation du Service&nbsp;</p><p><strong>Durée d’Utilisation Continue Autorisée :</strong> désigne une durée maximum de 12h d’utilisation du Vélo dont le dépassement donnera lieu à l’application de pénalités par l’Opérateur&nbsp;</p><p><strong>Parties :</strong> désigne ensemble l’Opérateur et l’Utilisateur&nbsp;</p><p><strong>Opérateur :</strong> désigne la société CITYBIKE MEDITERRANEE qui exploite le Service pour le compte de la Métropole.</p><p><strong>Scanner :</strong> Lire le QR code présent sur le vélo avec son appareil photo dans l’application &nbsp;</p><p><strong>Service :</strong> désigne le service de Vélos à assistance électrique en libre-service proposé par l’Opérateur&nbsp;</p><p><strong>Site Internet :</strong> désigne le site web <a href="https://levelo.ampmetropole.fr">levelo.ampmetropole.fr</a> mis à disposition des Utilisateurs et prospects souhaitant avoir des informations sur le Service, créer son Compte, souscrire au Service, contacter le Service Client, télécharger l’application ou consulter les CGUS&nbsp;</p><p><strong>Station :</strong> aire de stationnement des vélos, équipée d’une ou plusieurs bornes de recharge et de stationnements de vélos, d’un rack de maintenance et d’un Totem, équipé d’un terminal bancaire ou non</p><p><strong>Station virtuelle&nbsp;:</strong> aire de stationnements des vélos non équipées de bornes de recharge</p><p><strong>Tarif :</strong> prix applicable au Service qui est expressément communiqué via l’Application et/ou le Site Internet au moment de la validation de la commande correspondante</p><p><strong>Ticket RFID :</strong> support physique délivré dans les Totems CB permettant de louer un vélo en passant le ticket sur le cadre du vélo, à l’endroit indiqué par un adhésif</p><p><strong>Totem CB :</strong> mobilier urbain de la Station composé d’un écran LCD, d’un terminal de paiement et d’une imprimante de tickets RFID. Il permet à tout Utilisateur du Service d’acheter un abonnement courte durée en utilisant sa carte bancaire avec émission d’un Ticket RFID, de visualiser la carte des stations et d’avoir accès aux informations du service client.&nbsp;</p><p><strong>Utilisateur :</strong> désigne toute personne physique âgée de plus de 14 ans ayant la capacité d’utiliser le Service&nbsp;</p><p><strong>Vélo :</strong> désigne les vélos à assistance électrique utilisés dans le cadre du Service proposé l’Opérateur&nbsp;</p><h2><strong>3. DESCRIPTION DU SERVICE&nbsp;</strong></h2><h3><strong>3.1. Présentation du service</strong></h3><p>Le Service permet à l’Utilisateur, après avoir créé un Compte sur l’Application ou sur le Site Internet, d’emprunter un Vélo situé sur une Station selon les modalités décrites ci-après.</p><p>Le Service est constitué de Stations. Chaque station est composée :</p><ul><li>D’une ou plusieurs bornes de recharge et de stationnement, permettant la location et la restitution des Vélos</li><li>D’un totem d’information du Service, équipé ou non d’un terminal de paiement permettant d’acheter un pass 24h en utilisant sa carte bancaire avec émission d’un Ticket RFID, de visualiser la carte des stations et d’avoir accès aux informations du service client.</li><li>D’un arceau de maintenance, permettant la restitution de Vélos défectueux</li></ul><p>Le service est également doté d’une Application permettant à l’Utilisateur :&nbsp;</p><ul><li>de s’identifier et d’accéder aux informations présentes sur son Compte ;&nbsp;</li><li>de rattacher sa carte de transport RFID à son Compte</li><li>de consulter l’état des Stations et la position des vélos situées à proximité ;&nbsp;</li><li>d’obtenir un renseignement relatif au Service ;&nbsp;</li><li>de contacter le Service Client ;&nbsp;</li><li>de louer un vélo ;&nbsp;</li><li>d’enregistrer, de modifier ou de supprimer ses informations bancaires ;&nbsp;</li><li>de consulter l’historique de ses trajets et de ses paiements ;&nbsp;</li><li>de consulter les CGUS</li></ul><h3><strong>3.2 Présentation des Abonnements et du Pass 24h</strong></h3><p>Les Abonnements et les Pass sont strictement personnels et rattachés exclusivement à la personne indiquée comme Utilisateur lors de la souscription.</p><p>Les Abonnements proposés dans le cadre du Service sont les suivants :</p><figure class="table"><table><tbody><tr><td style="vertical-align:top;">Abonnement</td><td style="vertical-align:top;">Description</td></tr><tr><td style="vertical-align:top;">Paiement à l’usage</td><td style="vertical-align:top;"><ul><li>Abonnement par défaut à la création du compte</li><li>Facturation à l’usage dès la première minute d’utilisation</li></ul></td></tr><tr><td style="vertical-align:top;">Permanent</td><td style="vertical-align:top;"><ul><li>Engagement sur douze mois avec tacite reconduction</li></ul></td></tr><tr><td style="vertical-align:top;">Combiné transport</td><td style="vertical-align:top;"><ul><li>Durée de validité lié à l’abonnement transport de l’Utilisateur</li></ul></td></tr></tbody></table></figure><p>La souscription des abonnements s’effectue sur l’Application et le Site Internet.</p><p>Les Pass proposés dans le cadre du Service sont les suivants :</p><figure class="table"><table><tbody><tr><td style="vertical-align:top;">Pass</td><td style="vertical-align:top;">Description</td></tr><tr><td style="vertical-align:top;">Pass 24h</td><td style="vertical-align:top;"><ul><li>Durée de 24h</li></ul></td></tr></tbody></table></figure><p>La souscription des Pass s’effectue sur les totem CB, l’Application et le Site Internet.</p><h3><strong>3.3. Disponibilité du service</strong></h3><p>Dès lors que l’Utilisateur dispose d’un Abonnement ou un Pass en cours de validité, il peut louer un Vélo pour un nombre de locations illimitées durant sa période de validité.</p><p>Le Service est accessible dans la limite des Vélos disponibles sur le territoire, 7 jours sur 7, 24 heures sur 24, sans interruption, sauf en cas de force majeure au sens de l’article 1218 du code civil ou décision d’une autorité administrative ou judiciaire imposant une restriction totale ou partielle, temporaire ou définitive, de l’implantation d’une Station, de l’usage d’un ou plusieurs Vélos ou de la circulation cycliste sur le territoire d’implantation du Service. L’Opérateur fait ses meilleurs efforts pour informer en temps réel l’Utilisateur des conditions de disponibilité du Service via le Site Internet ou l’Application.&nbsp;</p><p>Pour toute location d’une durée minimale de 3 minutes, et afin d’éviter toute privatisation d’un Vélo, un délai d’attente de 5 minutes est à respecter entre deux locations d’un même Vélo.</p><p>Chaque location ne pourra pas excéder la Durée d’Utilisation Continue Autorisée de 12h. En cas de litige sur la durée d’utilisation du service par l’Utilisateur, les données délivrées par le serveur informatique du Service Client font foi. Au-delà de la Durée d’Utilisation Continue Autorisée, le Vélo est considéré comme non restitué et l’Opérateur se réserve le droit de prélever une pénalité financière sur le compte bancaire de l’Utilisateur, pour non restitution du vélo dont le montant est défini à l’article 9.&nbsp;</p><h2><strong>4. MODALITES D’ACCES AU SERVICE</strong></h2><h3><strong>4.1. Souscription au service</strong></h3><h4><strong>4.1.1. Via l’application ou le site internet</strong></h4><p>Afin de pouvoir souscrire et utiliser le Service, l’Utilisateur doit créer un compte sur l’Application ou sur le Site Internet.</p><p>L’Utilisateur :</p><ul><li>définit son identifiant (adresse électronique) qui lui permet de se connecter par la suite aux informations de son compte. Un code secret à 4 chiffres sera envoyé à son adresse électronique pour valider l’inscription et pour accéder au compte ;</li><li>renseigne ses coordonnées personnelles ;</li><li>enregistre les coordonnées d’une carte bancaire personnelle et en cours de validité ;</li><li>accepte les présentes CGUS ;</li><li>ajoute un justificatif le cas échéant ;</li></ul><p>L’utilisateur peut souscrire depuis son compte à un abonnement adapté à son intensité d’utilisation.</p><p>L’Utilisateur est limité à un compte par personne physique. La création d’un compte est gratuite. L’Opérateur se réserve la possibilité d’exiger à la communication de pièces justificatives comme une copie de la carte d’identité afin de valider la création du compte.&nbsp;</p><p>L’Utilisateur est seul responsable du choix de ses identifiants à l’égard des droits des tiers, notamment en matière d’usurpation d’identité ou de droits de propriété intellectuelle, ainsi que du maintien de leur caractère confidentiel. En cas de perte ou d’oubli des identifiants, l’Utilisateur doit s’adresser au Service Client.</p><p>L’Opérateur se réserve le droit de refuser ou d’annuler la création d’un compte ou l’accès au Service à tout Utilisateur ne remplissant pas les conditions requises dans les présentes CGUS.</p><h4><strong>4.1.2. Via un totem CB</strong></h4><p>Afin de pouvoir utiliser le Service, l’Utilisateur :</p><ul><li>doit choisir son Pass sur l’écran d’accueil ;</li><li>définit le nombre de vélo qu'il souhaite utiliser avec son pass ;</li><li>accepte les présentes CGUS ;</li><li>procède à la pré autorisation de paiement correspondant au montant de la caution, définie en fonction du nombre de vélos choisis&nbsp;;</li><li>récupère son ticket RFID imprimé par la borne.</li></ul><p>L’Utilisateur est limité au nombre de vélos choisi dans son offre en course simultanée.</p><p>L’Utilisateur est seul responsable de son ticket RFID. En cas de perte ou d’oubli, l’Utilisateur doit s’adresser au Service Client.</p><h3><strong>4.2. Modalités d’emprunt du Vélo en Station</strong></h3><h4><strong>4.2.1. Avec l’application</strong></h4><p>Lors de la location d’un Vélo, l’Utilisateur doit :&nbsp;</p><ol><li>Ouvrir l’application iOS ou Android sur son smartphone</li><li>(Obligatoire) Activer la géolocalisation et le Bluetooth si ce n’est pas déjà fait&nbsp;</li><li>(Optionnel) Entrer son adresse de destination afin d’être guidé vers les stations de départ et d’arrivée les plus proches de son itinéraire&nbsp;</li><li>(Optionnel) l’Utilisateur a la possibilité de réserver un vélo en station pendant quelques minutes</li><li>Se rendre auprès du premier vélo disponible sur la rangée de vélos stationnés contre une borne de recharge</li><li>Scanner le QR code ou entrer manuellement le numéro d’identification du vélo</li><li>Presser le frein gauche pour libérer le vélo</li><li>Le déverrouillage est confirmé par un signal sonore (double bip), une notification dans l’Application et la location commence.</li></ol><p>Le déverrouillage du vélo se fait via une communication entre le vélo et le smartphone.&nbsp;</p><h4><strong>4.2.2. Avec une carte de transport ou un ticket RFID</strong></h4><p>Dans le cas de l’utilisation de la carte de transport uniquement, et avant la 1ère location d’un Vélo, l’Utilisateur doit rattacher son numéro de carte de transport à son Compte dans l’Application ou sur le Site Internet.&nbsp;</p><p>Lors de la location d’un Vélo, l’Utilisateur doit :&nbsp;</p><ol><li>Se rendre auprès du premier vélo disponible sur la rangée de vélos stationnés contre une borne de recharge</li><li>Presser le frein gauche pour actionner le lecteur RFID</li><li>Placer la carte de transport ou le Ticket RFID sur le signe du cadre</li><li>Attendre LED verte + double BIP + allumage des feux qui confirme le démarrage du trajet</li><li>Presser de nouveau le frein gauche pour libérer le vélo</li><li>Le déverrouillage est confirmé par un signal sonore (double bip) et la location commence.</li></ol><h3><strong>4.3. Modalités d’emprunt d’un vélo dans une station virtuelle</strong></h3><h4><strong>4.3.1. Avec l’application</strong></h4><p>Lors de la location d’un Vélo dans une station virtuelle, l’Utilisateur doit :&nbsp;</p><ol><li>Ouvrir l’application iOS ou Android sur son smartphone</li><li>(Obligatoire) Activer la géolocalisation et le Bluetooth si ce n’est pas déjà fait&nbsp;</li><li>(Optionnel) Entrer son adresse de destination afin d’être guidé vers les stations de départ et d’arrivée les plus proches de son itinéraire&nbsp;</li><li>(Optionnel) l’Utilisateur a la possibilité de réserver un vélo dans une station virtuelle pendant quelques minutes</li><li>Se rendre auprès d’un des vélos disponibles indiqués dans l’application</li><li>Scanner le QR code ou entrer manuellement le numéro d’identification du vélo</li><li>Un signal sonore (double bip) indique que le Vélo a bien été déverrouillé. La led du vélo clignote en vert, les phares s’allument, l’Utilisateur reçoit une notification dans l’Application et la location commence.</li></ol><p>Le déverrouillage du vélo se fait via une communication entre le vélo et le smartphone.&nbsp;</p><h4><strong>4.3.2. Avec une carte de transport ou un ticket RFID</strong></h4><p>Lors de la location d’un Vélo, l’Utilisateur :&nbsp;</p><ol><li>Appuie sur le frein gauche du vélo de la station virtuelle</li><li>Passe sa carte de transport ou son ticket RFID sur le sigle du cadre</li><li>Un signal sonore (double bip) indique que le Vélo a bien été déverrouillé. La led du vélo clignote en vert, les phares s’allument et la location commence.</li></ol><h3><strong>4.4. Cas d’un vélo défectueux empêchant la prise d’un Vélo fonctionnel</strong></h3><p>Si le premier vélo de la rangée est indisponible (défectueux ou sans batterie) alors à la tentative de démarrage de trajet :</p><ol><li>Le vélo clignote en rouge et émet un bip “erreur”.</li><li>si l'Utilisateur utilise son application, un écran spécifique apparaît et indique à l'Utilisateur :</li></ol><ul><li>que le premier vélo est indisponible et la raison</li><li>qu’il faut le déposer sur la borne de maintenance pour accéder au suivant</li></ul><p>Si l’Utilisateur utilise sa carte de transport ou un ticket RFID, il contacte le Service Client.</p><ol><li>Après validation de l'Utilisateur dans l’application ou directement après le scan RFID le cas échéant, le vélo se déverrouille pour une durée de 2 minutes. Il émet un bip sonore &nbsp; &nbsp; spécifique, différent du bip sonore émis lors d’un début de trajet pour ne pas les confondre, les feux restent éteints et l’assistance est coupée.</li><li>L'Utilisateur appuie sur le frein gauche pour libérer le vélo et l’amener à l’arceau de maintenance (si l'Utilisateur utilise l’Application, un écran spécifique pour l'accompagner&nbsp; &nbsp; &nbsp; apparaît).&nbsp;</li><li>Le vélo se verrouille automatiquement une fois accroché à l’arceau de maintenance. Ce trajet ne sera pas facturé à l'Utilisateur.</li><li>L'Utilisateur peut alors accéder au vélo suivant</li></ol><h3><strong>4.5. Sécuriser un Vélo en dehors d’une Station pendant la location&nbsp;</strong></h3><p>Il est possible de verrouiller le Vélo en cours de location. L’Utilisateur est informé que dans ce cas, le temps de location continue à être décompté.&nbsp;</p><h4><strong>4.5.1. Avec l’application</strong></h4><p>Pour verrouiller son Vélo en dehors d’une Station, l’Utilisateur appuie sur le bouton “Pause”. Un signal sonore (double bip) indique que le Vélo a bien été verrouillé. L'application entre en mode pause. La led du vélo clignote en rose et les phares s’éteignent.</p><p>Pour déverrouiller le Vélo et reprendre son trajet, l’Utilisateur clique sur le bouton “Reprendre mon trajet”. Un signal sonore (double bip) indique que le Vélo a bien été déverrouillé. La led du vélo clignote en vert et les phares s’allument.</p><h4><strong>4.5.2. Avec une carte de transport ou un ticket RFID</strong></h4><p>Pour verrouiller son Vélo en dehors d’une station, l’Utilisateur :</p><ol><li>Appuie sur le frein gauche</li><li>Passe sa carte de transport ou son ticket RFID sur le sigle du cadre</li><li>Un signal sonore (double bip) indique que le Vélo a bien été verrouillé. La led du vélo clignote en rose et les phares s’éteignent.</li></ol><p>Pour déverrouiller le Vélo et reprendre son trajet, l’Utilisateur :</p><ol><li>Appuie sur le frein gauche</li><li>Passe sa carte de transport ou son ticket RFID sur le sigle du cadre</li><li>Un signal sonore (double bip) indique que le Vélo a bien été déverrouillé. La led du vélo clignote en vert et les phares s’allument.</li></ol><h3><strong>4.6. Modalités de restitution du vélo en fin de location</strong></h3><h4><strong>4.6.1. Restitution d’un vélo en Station</strong></h4><p>Dans le cas de l’utilisation de l’Application avec destination renseignée, l’Utilisateur est accompagné jusqu’à la station disponible la plus proche de sa destination en suivant l’itinéraire et les indications indiquées par l’Application. L’Utilisateur (s’il renseigne sa destination) peut modifier sa destination dans l’Application à tout moment.</p><p>Une fois devant la Station, l’Utilisateur doit accrocher son Vélo directement à la Station ou au Vélo déjà présent sur la Station grâce aux deux aimants situés sur le haut du cadre en dessous de la fourche et sur le bas du cadre au niveau du moyeu arrière, et à la bande de guidage en positionnant la roue avant dans l’encoche.</p><p>Si le vélo a bien été raccroché l’Utilisateur voit un double clignotement vert sur le cadre du vélo et entend un signal sonore (double bip). De plus les phares du vélo s’éteignent. La location se termine alors automatiquement. Un Vélo n’est considéré comme restitué que lorsqu’il est verrouillé en station.</p><p>Dans le cas de l’utilisation de l’application, le récapitulatif du trajet avec le prix facturé apparaît à l’écran et donne à l’Utilisateur la possibilité de noter son trajet.</p><p>Un message d’erreur avertira l’Utilisateur si son Vélo est mal restitué. Dans ce cas, il est invité à recommencer la procédure de dépôt du Vélo sur la station.&nbsp;</p><p>Si après le signal sonore, l’Utilisateur ne parvient toujours pas à terminer son trajet, il doit contacter le service client dans les plus brefs délais.</p><p>L’Utilisateur peut accéder à l’historique de ses trajets sur son profil sur l’application ou le site internet.</p><h4><strong>4.6.2. Restitution d’un vélo en Station virtuelle</strong></h4><p>L’Utilisateur dépose son Vélo dans la Station Virtuelle signalée sur l’application.</p><p><i><strong>4.6.2.1. Avec l’application</strong></i></p><p>Pour terminer son trajet dans une station virtuelle, l’Utilisateur appuie sur le bouton “Finir mon trajet”. Un signal sonore (double bip) indique que le Vélo a bien été verrouillé. La led du vélo clignote en rose et les phares s’éteignent. Le trajet est terminé.</p><p><i><strong>4.6.2.2. Avec une carte de transport ou un ticket RFID</strong></i></p><p>Pour terminer son trajet dans une Station Virtuelle, l’Utilisateur :</p><ol><li>Appuie sur le frein gauche</li><li>Passe sa carte de transport ou son ticket RFID sur le sigle du cadre</li><li>Un signal sonore (double bip) indique que le Vélo a bien été verrouillé. La led du vélo clignote en rose et les phares s’éteignent.</li><li>Le trajet est terminé.</li></ol><h4><strong>4.6.3. Restitution d’un vélo défectueux</strong></h4><p>Si un défaut affectant l’utilisation du Vélo par un Utilisateur apparaît en cours de location, alors l’Utilisateur peut le déclarer dans l’application. Il est ensuite invité à restituer son vélo directement sur un arceau de maintenance s’il juge que le vélo n’est plus utilisable, afin de l’isoler des autres vélos.</p><p>Cette démarche peut également être réalisée en contactant le service client.</p><h4><strong>4.6.4. Demande de fin de trajet en urgence</strong></h4><p>En cas de problème rencontré pour terminer son trajet, l’Utilisateur contacte le Service Client.</p><p>En dehors des heures d’ouverture du service client, l’Utilisateur a la possibilité de demander la fin de son trajet dans l’Application. Il est invité à cliquer sur le bouton “DEMANDER LA FIN DE MON TRAJET” et à remplir le formulaire de demande. Il doit confirmer accepter et respecter les conditions de fin de trajet d’urgence listées dans l’article du formulaire pour valider sa demande. Une fois le formulaire rempli, et la photo du vélo transmise, le service client reviendra vers l’Utilisateur et procèdera à la régularisation de son trajet. En cas d’utilisation abusive de cette fonctionnalité, l’Opérateur se réserve le droit de lui facturer des pénalités du montant applicable à la disparition du vélo sans justification à compter du début de la location listé dans l’Article 9 des présentes CGUS.&nbsp;</p><h2><strong>5. TARIF ET MODALITES DE PAIEMENT&nbsp;</strong></h2><p>Les Tarifs applicables sont précisés sur le Site Internet et l’Application et sont affichés au moment de la souscription du Service par l’Utilisateur.</p><h3><strong>5.1. Coût du service</strong></h3><p>Le coût du Service comprend :</p><ul><li>le coût d’accès au Service souscrit par l’Utilisateur, qui est variable en fonction du type d’Abonnement ou Pass souscrit</li><li>le coût d’utilisation qui est variable en fonction du type d’Abonnement ou Pass souscrit et de la durée d’utilisation du Service</li></ul><p>Chaque trajet est consultable dans la rubrique « Mon Compte » disponible sur le Site Internet et l’Application.</p><figure class="table"><table><tbody><tr><td><strong>Nom du titre</strong></td><td><strong>Coût d’accès</strong></td><td><strong>Coût d’utilisation</strong></td></tr><tr><td><strong>Abonnement</strong></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>Paiement à l’usage</td><td>Gratuit</td><td>Dès la 1<sup>ère</sup> minute, facturation forfaitaire d’un trajet de 30 minutes. Au-delà, facturation à la minute.</td></tr><tr><td>Levélo Permanent tout public / réduit</td><td>Payant</td><td>Les 30 premières minutes de chaque trajet sont gratuites. Au-delà, facturation à la minute.</td></tr><tr><td>Combiné transport</td><td>Gratuit</td><td>Les 30 premières minutes de chaque trajet sont gratuites. Au-delà, facturation à la minute.</td></tr><tr><td><strong>Pass</strong></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>Pass 24 h levélo</td><td>Payant</td><td>Les 30 premières minutes de chaque trajet sont gratuites. Au-delà, facturation à la minute.</td></tr></tbody></table></figure><p>&nbsp;</p><p>Le Tarif est facturé à l’Utilisateur directement sur sa carte bancaire en fonction de la durée du trajet. Toute minute entamée est due.</p><p>L’Utilisateur reconnaît et accepte que les Tarifs applicables puissent augmenter. Ce principe s’applique en cas de révision des Tarifs. L’Utilisateur sera averti sur l’ensemble des supports du service en cas de révision des Tarifs.</p><p>En cas de modification du coût d’utilisation, cette modification s’appliquera automatiquement aux abonnements en cours.</p><p>En cas de modification du coût d’accès, l’Utilisateur disposera d’un délai de 15 jours à compter de la notification des nouveaux tarifs pour résilier son abonnement. Dans le cas contraire, la nouvelle tarification sera appliquée à la prochaine échéance.</p><h3><strong>5.2. Gratification</strong></h3><p>En cas de signalement d’un vélo jugé inutilisable et de dépose sur un arceau de maintenance, l'Utilisateur se voit gratifier des points bonus après dépose en arceau de maintenance. Un envoi de mail automatique est généré pour l'en avertir et le compteur de point est actualisé dynamiquement dans l'Application et le site Internet.</p><p>L’Utilisateur se verra également gratifier de points bonus en fonction de la fréquence et de la qualité de son utilisation du service.</p><p>Ces points bonus pourront être transformés en minutes gratuites et d’autres avantages sur le service.</p><h3><strong>5.3. Paiement du Service</strong></h3><p>La facturation du service se fait sur la base des trajets effectivement réalisés, avec une facturation à chaque trajet.</p><p>La facturation de l’abonnement se fait à la date anniversaire de souscription de l’abonnement, en mois plein.</p><p>Pour des raisons de sécurité, certains types de cartes bancaires peuvent être inutilisables temporairement ou définitivement sur le service.</p><h4><strong>5.3.1. A travers l’utilisation de son Compte (Application, carte de transport)</strong></h4><p>Le paiement du Service s’effectue par carte bancaire dont l’Utilisateur aura renseigné les données lors de la création de son Compte ou dans le cadre de toute mise à jour de ses informations bancaires.&nbsp;</p><p>En saisissant ses numéros de carte bancaire, l’Utilisateur consent à l’Opérateur, une autorisation de prélèvement sur carte bancaire pour tous montants dus par l’Utilisateur conformément aux présentes CGUS. L’Utilisateur reconnaît et déclare :&nbsp;</p><ul><li>Que la carte bancaire associée à son Compte et ses coordonnées sont et demeurent valides ;&nbsp;</li><li>Qu’il dispose de la capacité, du consentement ou du pouvoir requis pour associer cette carte bancaire à son Compte et pour être débité sur cette carte des frais d’utilisation du Service.&nbsp;</li></ul><p>Au début du trajet, Stripe Inc (la plateforme de paiement choisie par l’opérateur) procède à une pré-autorisation de débiter la carte bancaire de l’Utilisateur en vue de garantir le paiement du service.&nbsp;</p><p>Dans certains cas dépendant de la banque de l’Utilisateur, cette pré-autorisation peut temporairement apparaître sur le compte bancaire de l’Utilisateur ; ladite pré-autorisation est supprimée à la fin du trajet pour laisser place au prélèvement final.</p><h4><strong>5.3.2. A travers l’achat d’un abonnement courte durée sur un Totem CB</strong></h4><p>Le paiement du Service s’effectue par carte bancaire dont l’Utilisateur aura renseigné les données lors de l’achat de l’abonnement courte durée sur le Totem CB.</p><p>En saisissant ses numéros de carte bancaire, l’Utilisateur consent à l’Opérateur, une autorisation de prélèvement sur carte bancaire pour tous montants dus par l’Utilisateur conformément aux présentes CGUS. L’Utilisateur reconnaît et déclare :&nbsp;</p><ul><li>Que la carte bancaire associée à son Compte et ses coordonnées sont et demeurent valides ;&nbsp;</li><li>Qu’il dispose de la capacité, du consentement ou du pouvoir requis pour associer cette carte bancaire à son Compte et pour être débité sur cette carte des frais d’utilisation du Service.&nbsp;</li></ul><p>Lors de l’achat de l’abonnement, Nepting (la plateforme de paiement du Totem CB choisie par l’opérateur) procède à une pré-autorisation de débiter la carte bancaire de l’Utilisateur en vue de garantir le paiement du service.&nbsp;</p><p>Dans certains cas, dépendant de la banque de l’Utilisateur, cette pré-autorisation peut temporairement apparaître sur le compte bancaire de l’Utilisateur ; ladite pré-autorisation est supprimée à la fin de la validité de l’abonnement pour laisser place au prélèvement final.</p><h3><strong>5.4. Sécurisation des paiements</strong></h3><p>L’Opérateur utilise les services de Stripe Inc et Nepting, sociétés spécialisées pour sécuriser les paiements en ligne effectués par carte bancaire. Les paiements sont effectués via une interface de paiement sécurisée et certifiée PCI-DSS. Ces sociétés s’engagent à maintenir cette certification (ou toute certification équivalente, quelle que soit sa dénomination future) et est responsable de la sécurité des données des titulaires de cartes bancaires qu’elles recueillent ou stockent, traitent ou transmettent au nom et pour le compte de l’Opérateur. L’Utilisateur est informé que les dispositions relatives à l’éventuelle utilisation frauduleuse de sa carte bancaire sont celles résultant de la convention passée avec son établissement bancaire. L’Opérateur, ne saurait en aucun cas être tenu pour responsable en cas d’utilisation frauduleuse des moyens de paiement d’un Utilisateur.&nbsp;</p><h3><strong>5.5. Modification et résiliation de l’Abonnement par l’Utilisateur</strong></h3><p>L’Utilisateur a la possibilité de modifier et de résilier son abonnement sur l’Application ou le Site Internet.</p><p>L’abonnement permanent ne peut être modifié ou résilié lors des 12 premiers mois, sauf dans le cas d’une modification ou résiliation pour causes légitimes : décès, perte d’emploi, changement de domiciliation professionnelle hors du ressort territorial, hospitalisation long terme.</p><p>Au-delà des 12 premiers mois, la demande de résiliation devra être effectuée au moins 10 jours avant la date anniversaire de la souscription.</p><p>En cas de modification du coût d’accès, l’Utilisateur disposera d’un délai de 15 jours à compter de la notification des nouveaux tarifs pour résilier son abonnement. Dans le cas contraire, la nouvelle tarification sera appliquée à la prochaine échéance.</p><h3><strong>5.6. Résiliation pour faute de l’Utilisateur&nbsp;</strong></h3><p>L’abonnement sera résilié par l’Opérateur en cas de faute de l’Utilisateur dans les conditions suivantes. Sont notamment considérés comme une faute de l’Utilisateur :&nbsp;</p><ul><li>Le défaut de paiement partiel ou total du prix d’un trajet ou de tout montant dû au titre du service.&nbsp;</li><li>L’utilisation du service non conforme aux présentes CGUS.&nbsp;</li></ul><p>Si après mise en demeure de l’Utilisateur de remédier au manquement constaté restée infructueuse, l’Opérateur suspend l’accès au Service jusqu’à régularisation de la situation par l’Utilisateur.&nbsp;</p><p>Pendant la suspension de l’accès au Service, l’Utilisateur reste néanmoins redevable des trajets préalablement effectués.&nbsp;</p><p>Si le Service est suspendu pendant plus de deux (2) mois, l’Opérateur pourra mettre fin au Contrat.&nbsp;</p><h2><strong>6. OBLIGATIONS DE L’UTILISATEUR</strong></h2><p>L’Utilisateur s’engage à faire une utilisation normale et privative du Service. A ce titre, l’Utilisateur s’engage à utiliser le Service de manière prudente, diligente et avisée, et dans le respect des présentes CGUS et du Code de la Route et de toute réglementation applicable.&nbsp;</p><p>L’Utilisateur assume la garde du Vélo qu’il a loué. Il est responsable de son éventuelle dégradation, destruction ou sa disparition. Il devra verrouiller systématiquement le Vélo avec la fonctionnalité pause dès qu’il s’arrête hors station et laisse le vélo hors de sa surveillance. L’Utilisateur s’engage à louer et restituer le Vélo dans les délais de la Durée d’Utilisation Continue Autorisée.&nbsp;</p><p>L’Utilisateur accepte par avance que tout manquement à ces obligations donnera droit à l’Opérateur au versement d’une pénalité forfaitaire dont le montant définitif est fixé selon les termes et modalités prévues à l’article 9. En cas de constatation de l’utilisation d’un Vélo contraire aux dispositions des présentes CGUS, l’Utilisateur s’engage à restituer le Vélo à tout moment, à la première demande de l’Opérateur ou de ses représentants.&nbsp;</p><p>L’Utilisateur s’engage à signaler dans les plus brefs délais au Service Client la perte ou le vol du Vélo, ou tout autre problème relatif au Vélo, à l’utilisation de son code d’accès, et au maximum dans les 24 heures suivant la survenance de l’événement, le Vélo restant en tout état de cause sous sa responsabilité jusqu’à sa restitution. Les Utilisateurs sont seuls responsables de la mise à jour de leurs coordonnées personnelles et des conséquences dommageables que pourraient entraîner l’absence de communication de toute modification y afférant. Afin de pouvoir maintenir l’accès au Service, l’Utilisateur s’engage à maintenir une carte bancaire valide pendant la durée de l’utilisation du service. Au besoin, il met à jour les coordonnées et la date de validité de sa carte directement sur son Compte.</p><h2><strong>7. RESTRICTIONS A L’USAGE DU SERVICE&nbsp;</strong></h2><p>L’accès au service est interdit aux personnes mineures de moins de 14 ans, accompagnées ou non.&nbsp;</p><p>Le Service est accessible aux personnes mineures ayant entre 14 ans révolus et 18 ans ; le tuteur légal peut choisir de payer pour l’utilisation de la personne mineure en enregistrant sa carte de paiement personnelle sur le compte de la personne mineure.&nbsp;</p><p>Le tuteur légal de toute personne mineure utilisant le Service, sera tenu responsable pour tout dommage causé directement ou indirectement par la personne mineure du fait de l’utilisation du Service.&nbsp;</p><p>Comme pour tout titulaire d’un abonnement, la personne mineure de plus de 14 ans doit être détentrice d’un compte personnel, d’un numéro de téléphone et d’une adresse e-mail. Il est précisé que les comptes sont strictement personnels, et permettent à tout moment à l’Utilisateur de louer, utiliser, et restituer un Vélo selon les conditions décrites ci-après.&nbsp;</p><p>Il est donc interdit à l’Utilisateur de prêter, louer ou céder son Compte.&nbsp;</p><p>L’Utilisateur est autorisé à utiliser le Vélo selon les termes des présentes, ce qui exclut notamment :&nbsp;</p><ul><li>toute utilisation contraire aux dispositions de la réglementation routière applicable, en particulier les dispositions du code de la route ;&nbsp;</li><li>toute utilisation sur des terrains ou dans des conditions de nature à endommager le Vélo ;&nbsp;</li><li>le transport de quelque passager que ce soit de quelque façon que ce soit ;&nbsp;</li><li>le transport dans le panier avant d’une charge supérieure à 5 kg ;&nbsp;</li><li>toute utilisation du Vélo pouvant mettre en péril l’Utilisateur ou des tiers ;</li><li>tout démontage ou tentative de démontage de tout ou partie du Vélo ;</li><li>plus généralement, toute utilisation anormale d’un Vélo.&nbsp;</li></ul><p>Le Vélo ne peut supporter une charge totale supérieure à 120kg. L’Opérateur se réserve le droit de suspendre l’accès au compte de l’Utilisateur de plein droit et sans indemnités s’il s’avère que l’Utilisateur ne respecte pas les conditions prévues au présent article, et notamment en cas de vol, vandalisme, mise en danger d’autrui.&nbsp;</p><h2><strong>8. RESPONSABILITE ET DECLARATIONS DE L’UTILISATEUR</strong></h2><p>L’Utilisateur déclare être en mesure d’utiliser un Vélo et avoir la condition physique adaptée à cette utilisation (taille suffisante, bonne santé, etc, …).&nbsp;</p><p>Le Vélo étant placé sous la responsabilité de l’Utilisateur, il lui est recommandé de procéder, préalablement à l’utilisation effective du Vélo retiré, à une vérification élémentaire de ses principaux éléments fonctionnels apparents, et notamment (liste non-limitative) :&nbsp;</p><ul><li>la bonne fixation de la selle, des pédales et du panier ;&nbsp;</li><li>le bon fonctionnement de la sonnette, des freins et de l’éclairage ;</li><li>le bon état général du cadre et des pneumatiques. &nbsp; &nbsp; &nbsp;</li></ul><p>Dans le cas contraire, l’Utilisateur doit signaler tout incident via son Compte sur l’Application et/ou auprès du service client. Il pourra alors emprunter un second vélo après avoir déposé le vélo litigieux sur le rack de maintenance prévu à cet effet.</p><p>L’Utilisateur déclare avoir souscrit et être titulaire d’une assurance de responsabilité civile en vigueur qui garantit les conséquences de l’utilisation du Vélo. Il est en outre recommandé à l’Utilisateur :&nbsp;</p><ul><li>d’adapter sa distance de freinage en cas d’intempéries ;&nbsp;</li><li>d’effectuer le réglage de la selle pour adapter sa hauteur à sa morphologie ;</li><li>de porter un casque homologué et des vêtements adaptés.&nbsp;</li></ul><p>S’il le souhaite, l’Utilisateur peut utiliser le support smartphone disponible sur le guidon et l’Application afin d’être guidé sur son trajet. L’Utilisateur est responsable des dommages occasionnés à son smartphone en cas de chute ou d’une mauvaise utilisation du support. Si le support est visiblement défectueux, l’Utilisateur est tenu de ne pas l’utiliser.&nbsp;</p><p>L’Utilisateur est seul et entier responsable des dommages causés par l’utilisation faite du Vélo pendant toute la Durée d’Utilisation, y compris lorsque celle-ci excède la Durée d’Utilisation Continue Autorisée en cas de restitution tardive par l’Utilisateur. Les parents ou représentants légaux de toute personne mineure inscrite au Service, seront tenus responsables de tout dommage causé directement ou indirectement par la personne mineure du fait de l’utilisation du Service.&nbsp;</p><p>Tout emprunt supérieur à 24 heures est considéré comme un cas de disparition du Vélo sans justification jusqu’à ce que ce dernier soit retrouvé, et cela pourra donner lieu à des pénalités dans les conditions définies à l’Article 9. &nbsp;</p><p>Si la disparition du Vélo relève de la responsabilité de l’Utilisateur, celui-ci a l’obligation de signaler cette disparition au service client dans les 24 heures suivant l’emprunt initial, et cela pourra donner lieu à des pénalités dans les conditions définies à l’Article 9. &nbsp;</p><p>Si la disparition du Vélo ne relève pas de la responsabilité de l’Utilisateur, celui-ci a l’obligation de signaler cette disparition au service client dans les 24 heures suivant l’emprunt initial et de déposer dans les 48 heures auprès des services de police une plainte pour vol du Vélo et de communiquer au service client une copie dudit dépôt de plainte.&nbsp;</p><p>En cas d’accident et/ou incident mettant en cause le Vélo, l’Utilisateur a l’obligation de signaler les faits dans les plus brefs délais auprès du Service Client. Le Vélo reste sous sa responsabilité, soit jusqu’à son verrouillage, soit à défaut, jusqu’à confirmation d’une demande de verrouillage à distance au service client.&nbsp;</p><h2><strong>9. PÉNALITÉS&nbsp;</strong></h2><p>Pour chaque achat de titre, une pré-autorisation de débiter la carte bancaire de l’Utilisateur en vue de garantir le bon usage du service sera effectuée pour un montant de 300€.&nbsp; Dans certains cas, selon la banque de l’Utilisateur, cette pré-autorisation peut temporairement apparaître sur le compte bancaire de l’Utilisateur ; ladite pré-autorisation est supprimée à la fin du trajet pour laisser place au prélèvement final.</p><p>Dans le cas de l’achat d’un titre en Totem CB, l’Utilisateur a la possibilité d’utiliser plusieurs vélos avec son pass, en s’acquittant à chaque fois du montant du pass. Dans ce cas, une dégressivité de la pré-autorisation est appliquée&nbsp;:&nbsp;</p><ul><li>1 vélo : 300 €&nbsp;</li><li>2 vélos : 480 €</li><li>3 vélos : 540 €</li><li>4 vélos : 600 €</li></ul><p>L’Utilisateur s’engage à respecter les présentes conditions générales d’accès et d’utilisation du service et à restituer le Vélo emprunté dans le même état qu’au démarrage de la location. L’Utilisateur autorise par avance l’Opérateur à solliciter le prélèvement des pénalités suivantes en cas de manquement dans les conditions définies ci-après :&nbsp;</p><ol><li>Vol du vélo avec justificatif de plainte déposée : 150 €&nbsp;</li><li>Non restitution ou disparition du vélo sans justification à compter du début de la location : 300&nbsp;€&nbsp;</li><li>Détériorations subies par le vélo et imputables à l’Utilisateur : montant forfaitaire de 100 € par Vélo en plus du coût d’achat des pièces détachées qui devront être remplacées.&nbsp;</li></ol><h2><strong>10. DONNEES PERSONNELLES&nbsp;</strong></h2><p>Les données personnelles de l’Utilisateur seront traitées conformément à la politique de confidentialité de l’Opérateur.&nbsp;</p><h2><strong>11. REGLEMENT DES LITIGES&nbsp;</strong></h2><p>Les CGUS et les relations entre l’Utilisateur et l’Opérateur sont soumises au droit français. En cas de réclamation, l’Utilisateur peut saisir le Service Client soit en utilisant le formulaire prévu à cet effet sur le Site, soit par courriel à l’adresse : <a href="mailto:levelo@ampmetropole.fr">levelo@ampmetropole.fr</a> ou par courrier à l’adresse postale Service Client LEVELO 10 boulevard Ampère 13014 MARSEILLE. L’Utilisateur dispose d’un délai d’un mois à compter de l’événement contesté pour procéder à cette démarche.&nbsp;</p><p>Les Parties feront leurs meilleurs efforts pour trouver une solution amiable à tout différend survenant entre elles.&nbsp;</p><p>Conformément à l’article L. 612-1 du Code de la consommation, l’Opérateur garantit à l’Utilisateur la possibilité de recourir, en cas de contestation ayant donné lieu à une réclamation préalable écrite auprès du service client, à une procédure de médiation conventionnelle ou à tout autre mode alternatif de règlement des différends.&nbsp;</p><p>A défaut de parvenir à une résolution amiable, tout litige relatif à l’interprétation, l’exécution ou la rupture des présentes CGUS et/ou des relations entre l’Utilisateur et l’Opérateur seront du ressort des juridictions françaises compétentes, nonobstant la pluralité de défendeurs et/ou appel en garantie, même pour les procédures d’urgence ou les procédures conservatoires en référé ou par requête.&nbsp;</p><h2><strong>12. APPLICATION ET OPPOSABILITE DES CGUS&nbsp;</strong></h2><p>Les présentes CGUS s’appliquent à toute utilisation du Service par un Utilisateur et sont disponibles à tout moment à l’adresse <a href="https://levelo.ampmetropole.fr/terms-and-conditions">https://levelo.ampmetropole.fr/terms-and-conditions</a>.</p><p>L’Utilisateur s’engage à prendre connaissance des CGUS et à les accepter avant la première utilisation du Service et le téléchargement de l’Application. L’Utilisateur est informé que le seul fait d’utiliser le Service implique l’acceptation entière sans réserve de l’intégralité des stipulations prévues dans les présentes CGUS. Il reconnaît être parfaitement informé du fait que son accord concernant le contenu des CGUS ne nécessite pas la signature manuscrite ou électronique d’un document. L’Opérateur se réserve le droit de modifier les CGUS à tout moment, sans préavis, étant entendu que de telles modifications ne seront applicables qu’aux souscriptions et utilisations effectuées postérieurement à ces modifications. Le fait pour l’Opérateur de ne pas se prévaloir, à un moment donné, d’une des dispositions des présentes CGUS, ne pourra être interprété comme valant renonciation à s’en prévaloir ultérieurement.&nbsp;</p><p>Dans l’hypothèse où l’une des clauses des CGUS serait déclarée nulle, illégale ou inopposable, en tout ou partie, les autres clauses demeureront en vigueur et continueront d’avoir plein effet. Dans l’hypothèse où le Service serait confié à une société autre que l’Opérateur, l’Utilisateur accepte que les présentes CGUS soient automatiquement transférées au cessionnaire, quel qu’il soit. &nbsp;</p>`, i = r.bind({});
i.args = {
  source: o
};
const s = r.bind({});
s.args = {
  source: o,
  dense: !0
};
const d = `<a href="https://fifteen.eu">This is a link</a><br>
<abbr title="Abbreviation">Abbr</abbr><br>
<address>123 Main Street</address><br>
<b>This is bold text</b><br>
<bdo dir="rtl">This text is written right-to-left</bdo><br>
<blockquote>
    This is a blockquote. It can contain multiple lines of text.
</blockquote>
<span>Half of this text is on a new line<br> because of the \`br\` tag.</span><br>
<caption>This is the caption</caption><br>
<cite>The Catcher in the Rye</cite><br>
<code>console.log("This is code")</code><br>
<data value="123456">Data</data><br>
<dd>This is a definition in a definition list</dd><br>
<del>This text has been deleted</del><br>
<dfn>This is a definition</dfn><br>
<div>This is a division</div><br>
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
<em>This text is emphasized</em><br>
<figure>
    <img src="https://picsum.photos/300" alt="A description of the image">
    <figcaption>Caption for an image (the image should not be displayed)</figcaption>
</figure><br>
<img src="https://picsum.photos/300" alt="A description of the image">
<h1>This is a level 1 heading</h1>
<h2>This is a level 2 heading</h2>
<h3>This is a level 3 heading</h3>
<h4>This is a level 4 heading</h4>
<h5>This is a level 5 heading</h5>
<h6>This is a level 6 heading</h6>
<i>This text is in italics</i><br>
<ins>This text has been inserted</ins><br>
<kbd>This is keyboard input</kbd><br>
<mark>This text is marked</mark><br>
<meter value="0.75" min="0" max="1">75%</meter>
<p>This is a paragraph</p>
<pre>This text is preformatted
            It preserves whitespace</pre>
<q>This is a short quote</q><br>
<ruby>
    明日
    <rp>(</rp>
    <rt>Pinyin</rt>
    <rp>)</rp>
</ruby><br>
<s>This text is no longer relevant</s><br>
<samp>This is sample output</samp><br>
<small>This text is small</small><br>
<span>This is an inline element</span><br>
<strong>This text is strong</strong><br>
<sub>This text is a subscript</sub><br>
<sup>This text is a superscript</sup><br>
<table>
    <thead>
        <tr>
            <th>Heading 1</th>
            <th>Heading 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
        </tr>
    </tbody>
</table>
<time datetime="2022-01-01">January 1, 2022</time><br>
<u>This text has spellign mikstakes</u><br>
<ol>
    <li>List item 1</li>
    <li>List item 2</li>
</ol>
<ul>
    <li>List item</li>
    <li>List item</li>
</ul>
<var>This text is a variable</var>
<wbr>This indicates a line break opportunity</wbr>`, n = r.bind({});
n.args = {
  source: d
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FTextContentProps) => ({
  components: {
    FTextContent
  },
  setup: () => ({
    args
  }),
  template: '<FTextContent v-bind="args" />'
})`,
      ...e.parameters?.docs?.source
    }
  }
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(args: FTextContentProps) => ({
  components: {
    FTextContent
  },
  setup: () => ({
    args
  }),
  template: '<FTextContent v-bind="args" />'
})`,
      ...t.parameters?.docs?.source
    }
  }
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `(args: FTextContentProps) => ({
  components: {
    FTextContent
  },
  setup: () => ({
    args
  }),
  template: '<FTextContent v-bind="args" />'
})`,
      ...i.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FTextContentProps) => ({
  components: {
    FTextContent
  },
  setup: () => ({
    args
  }),
  template: '<FTextContent v-bind="args" />'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FTextContentProps) => ({
  components: {
    FTextContent
  },
  setup: () => ({
    args
  }),
  template: '<FTextContent v-bind="args" />'
})`,
      ...n.parameters?.docs?.source
    }
  }
};
const b = ["Default", "Dense", "RealCase", "DenseRealCase", "ExhaustiveList"];
export {
  e as Default,
  t as Dense,
  s as DenseRealCase,
  n as ExhaustiveList,
  i as RealCase,
  b as __namedExportsOrder,
  m as default
};