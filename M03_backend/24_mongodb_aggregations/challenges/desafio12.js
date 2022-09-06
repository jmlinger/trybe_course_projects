db.trips.aggregate([
  {
    $project: {
      dayOfWeek: { $dayOfWeek: "$startTime" },
      startStationName: true,
    },
  },
  {
    $match: {
      dayOfWeek: 5,
    },
  },
  {
    $group: {
      _id: "$startStationName",
      total_trips: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      _id: false,
      nomeEstacao: "$_id",
      total: "$total_trips",
    },
  },
  {
    $sort: { total: -1 },
  },
  {
    $limit: 1,
  },
]);
