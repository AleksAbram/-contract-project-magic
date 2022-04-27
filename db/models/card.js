const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Card.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Card.init({
    img: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    degree: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    user_id: {
      references: {
        model: 'Users',
        id: 'id',
      },
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    user_city: {
      allowNull: false,
      type: DataTypes.TEXT,
    },

  }, {
    sequelize,
    modelName: 'Cards',
  });
  return Card;
};
