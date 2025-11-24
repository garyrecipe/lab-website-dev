// 根據語言動態導入對應的數據文件
export const getEquipmentData = async (language) => {
  switch (language) {
    case 'en':
      const enEquipment = await import('../data/equipment.en.js');
      return enEquipment.EQUIPMENT_LIST;
    case 'zhtc':
    default:
      const zhtcEquipment = await import('../data/equipment.zhtc.js');
      return zhtcEquipment.EQUIPMENT_LIST;
  }
};

export const getMembersData = async (language) => {
  switch (language) {
    case 'en':
      const enMembers = await import('../data/members.en.js');
      return {
        PROFESSOR: enMembers.PROFESSOR,
        CURRENT_MEMBERS: enMembers.CURRENT_MEMBERS,
        ALUMNI: enMembers.ALUMNI
      };
    case 'zhtc':
    default:
      const zhtcMembers = await import('../data/members.zhtc.js');
      return {
        PROFESSOR: zhtcMembers.PROFESSOR,
        CURRENT_MEMBERS: zhtcMembers.CURRENT_MEMBERS,
        ALUMNI: zhtcMembers.ALUMNI
      };
  }
};

// 同步版本（用於非異步場景）
export const getEquipmentDataSync = (language) => {
  switch (language) {
    case 'en':
      // 使用動態導入，但返回 Promise
      return import('../data/equipment.en.js').then(module => module.EQUIPMENT_LIST);
    case 'zhtc':
    default:
      return import('../data/equipment.zhtc.js').then(module => module.EQUIPMENT_LIST);
  }
};

export const getMembersDataSync = (language) => {
  switch (language) {
    case 'en':
      return import('../data/members.en.js').then(module => ({
        PROFESSOR: module.PROFESSOR,
        CURRENT_MEMBERS: module.CURRENT_MEMBERS,
        ALUMNI: module.ALUMNI
      }));
    case 'zhtc':
    default:
      return import('../data/members.zhtc.js').then(module => ({
        PROFESSOR: module.PROFESSOR,
        CURRENT_MEMBERS: module.CURRENT_MEMBERS,
        ALUMNI: module.ALUMNI
      }));
  }
};

