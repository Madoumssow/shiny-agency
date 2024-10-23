// Importation des dépendances nécessaires
import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors' // Importation des couleurs
import DefaultPicture from '../../assets/profile.png' // Image par défaut pour le profil

// Création d'un composant stylisé pour le label de la carte
const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')}; // Couleur du texte selon le thème
  font-size: 22px; // Taille de la police
  font-weight: normal; // Poids de la police
  padding-left: 15px; // Marge à gauche
`

// Création d'un composant stylisé pour le titre de la carte
const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')}; // Couleur du texte selon le thème
  font-size: 22px; // Taille de la police
  font-weight: normal; // Poids de la police
  align-self: center; // Alignement au centre
  height: 25px; // Hauteur
  display: flex; // Utilisation de flexbox
  align-items: center; // Alignement vertical des éléments
`

// Création d'un composant stylisé pour l'image de la carte
const CardImage = styled.img`
  height: 150px; // Hauteur de l'image
  width: 150px; // Largeur de l'image
  align-self: center; // Alignement au centre
  border-radius: 50%; // Coins arrondis pour un effet circulaire
`

// Création d'un composant stylisé pour le conteneur de la carte
const CardWrapper = styled.div`
  display: flex; // Utilisation de flexbox
  flex-direction: column; // Disposition des éléments en colonne
  justify-content: space-around; // Espacement entre les éléments
  padding: 15px; // Marge intérieure
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark}; // Couleur de fond selon le thème
  border-radius: 30px; // Coins arrondis
  width: 300px; // Largeur de la carte
  height: 300px; // Hauteur de la carte
  &:hover {
    cursor: pointer; // Changement du curseur au survol
  }
`

// Création du composant Card en tant que classe
class Card extends Component {
  constructor(props) {
    super(props) // Appel du constructeur parent
    this.state = {
      isFavorite: false, // État pour suivre si la carte est marquée comme favorite
    }
  }

  // Fonction pour basculer l'état favorite
  setFavorite = () => {
    this.setState({ isFavorite: !this.state.isFavorite }) // Inversion de l'état isFavorite
  }

  // Méthode de rendu du composant
  render() {
    const { theme, picture, label, title } = this.props // Récupération des props
    const { isFavorite } = this.state // Récupération de l'état isFavorite
    const star = isFavorite ? '⭐️' : '' // Détermination de l'affichage de l'icône étoile

    return (
      <CardWrapper theme={theme} onClick={this.setFavorite}> {/* Wrapper pour la carte */}
        <CardLabel theme={theme}>{label}</CardLabel> {/* Affichage du label */}
        <CardImage src={picture} alt="freelance" /> {/* Affichage de l'image */}
        <CardTitle theme={theme}>
          {star} {title} {star} {/* Affichage du titre avec éventuellement des étoiles */}
        </CardTitle>
      </CardWrapper>
    )
  }
}

// Définition des types des props avec PropTypes
Card.propTypes = {
  label: PropTypes.string.isRequired, // Label requis
  title: PropTypes.string.isRequired, // Titre requis
  picture: PropTypes.string.isRequired, // Image requise
  theme: PropTypes.string.isRequired, // Thème requis
}

// Définition des valeurs par défaut des props
Card.defaultProps = {
  label: '', // Valeur par défaut pour le label
  title: '', // Valeur par défaut pour le titre
  picture: DefaultPicture, // Image par défaut
  theme: 'light', // Thème par défaut
}

// Exportation du composant Card
export default Card
/*********************************************************************************************
 * Explication détaillée du code :
Imports :

Les dépendances nécessaires sont importées, y compris React, PropTypes pour la validation des props, et styled-components pour la création de composants stylisés.
Les couleurs et une image par défaut pour le profil sont également importées.
Stylisation :

Des composants stylisés sont créés pour chaque partie de la carte : CardLabel, CardTitle, CardImage, et CardWrapper. Chaque composant a des styles conditionnels basés sur le thème (clair ou sombre).
Composant Card :

Classe du composant : Card est défini comme une classe qui étend Component.
État local : L'état local isFavorite est initialisé dans le constructeur pour suivre si la carte est marquée comme favorite.
Méthode setFavorite :

Cette méthode est définie pour inverser l'état de isFavorite lorsqu'elle est appelée, ce qui permet de marquer ou de démarketer la carte comme favorite.
Méthode render :

La méthode render utilise les props pour obtenir le thème, l'image, le label et le titre de la carte.
Un symbole d'étoile est conditionnellement affiché selon que la carte est favorite ou non.
La carte est structurée avec un CardWrapper, qui contient le label, l'image, et le titre, le tout avec un événement onClick pour basculer l'état de favorite.
PropTypes :

Les PropTypes sont définis pour s'assurer que les bonnes propriétés sont passées au composant, avec isRequired pour celles qui doivent obligatoirement être présentes.
DefaultProps :

Les defaultProps sont définis pour fournir des valeurs par défaut pour les props si elles ne sont pas spécifiées.
Objectif du composant :
Le composant Card est conçu pour afficher une carte qui peut contenir un label, un titre et une image de profil. Il permet également à l'utilisateur de marquer la carte comme favorite, en affichant une étoile lorsqu'elle est sélectionnée. La carte est stylisée et réactive en fonction du thème choisi (clair ou sombre).

 */