module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      img: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      condition: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      is_sold: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      user_id: {
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cards');
  },
};
