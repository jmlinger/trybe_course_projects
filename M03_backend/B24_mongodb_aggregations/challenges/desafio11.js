db.trips.aggregate([
  {
    $project: {
      dayOfWeek: { $dayOfWeek: "$startTime" },
    },
  },
  {
    $group: {
      _id: "$dayOfWeek",
      total_trips: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      _id: false,
      diaDaSemana: "$_id",
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
