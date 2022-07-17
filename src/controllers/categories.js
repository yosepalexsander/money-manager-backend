const { categories } = require("../../models");

exports.addCategory = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      type: req.body.type,
      userId: req.user.id,
    };

    await categories.create(data);

    res.send({
      status: "success",
      message: "Add category finished",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const userId = req.user.id;

    const categoriesData = await categories.findAll({
      where: {
        userId,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: categoriesData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const categoryData = await categories.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: categoryData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {
      name: req.body.name,
      type: req.body.type,
    };

    await categories.update(data, { where: { id } });

    const categoryData = await categories.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      message: `Update category id: ${id} finished`,
      data: {
        category: categoryData,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await categories.destroy({ where: { id } });

    res.send({
      status: "success",
      message: `Delete category id: ${id} finished`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
