export default {
  id: 'menu',
  name: 'Order Menu',
  package: '@burner-factory/order-menu-plugin',
  version: '^0.1.1',
  getIncomplete(data) {
    if (!data.pluginWalletData.menuId) {
      return 'Select a menu';
    }
  },
  getArgs(data) {
    return data.pluginWalletData.menuId;
  },
};
