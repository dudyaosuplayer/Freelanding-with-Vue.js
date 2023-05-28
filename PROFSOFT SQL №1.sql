SELECT r.name
FROM Restaurants r
LEFT JOIN Employees e ON r.id = e.restaurantId
LEFT JOIN Positions p ON e.positionId = p.id
WHERE p.title = 'waiter'
GROUP BY r.name
HAVING COUNT(*) > 2;