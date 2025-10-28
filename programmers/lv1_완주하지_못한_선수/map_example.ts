function showMapOperation() {
  const map = new Map<string, number>();

  console.log("\n--- 참가자 등록 과정 ---");

  // "mislav" 첫 등장
  console.log("1. mislav 첫 등록");
  console.log("현재 map:", map);
  console.log("map.get('mislav'):", map.get("mislav"));
  console.log("map.get('mislav') || 0:", map.get("mislav") || 0);
  map.set("mislav", (map.get("mislav") || 0) + 1);
  console.log("등록 후 map:", map);

  // "stanko" 등장
  console.log("\n2. stanko 등록");
  console.log("현재 map:", map);
  console.log("map.get('stanko'):", map.get("stanko"));
  console.log("map.get('stanko') || 0:", map.get("stanko") || 0);
  map.set("stanko", (map.get("stanko") || 0) + 1);
  console.log("등록 후 map:", map);

  // "mislav" 두 번째 등장
  console.log("\n3. mislav 두 번째 등록");
  console.log("현재 map:", map);
  console.log("map.get('mislav'):", map.get("mislav"));
  console.log("map.get('mislav') || 0:", map.get("mislav") || 0);
  map.set("mislav", (map.get("mislav") || 0) + 1);
  console.log("등록 후 map:", map);
}

showMapOperation();
