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
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    condition: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    is_sold: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    user_id: {
      references: {
        model: 'Users',
        id: 'id',
      },
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    city: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
