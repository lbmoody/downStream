module.exports = (sequelize, DataTypes) => {
    const Stream = sequelize.define("Stream", {
        stream_id: {
            type: DataTypes.INTEGER
        },
        count: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
            field: 'updated_at',
        }
    });

    Stream.associate = models => {
        Stream.hasMany(models.Message, {
            onDelete: "cascade"
        });

        Stream.belongsToMany(models.User, {
            through: "UserStreams",
            as: "users",
            foreignKey: 'streamId',
            otherKey: 'userId'
        });
    };

    return Stream;
};