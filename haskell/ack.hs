ack :: Int -> Int -> Int
ack m n
    | m == 0 = n+1
    | n == 0 = ack (m-1) 1
    | otherwise = ack (m-1) $ ack m (n-1)

{-
Examples:
    *Main> ack 3 4
    125
    *Main> ack 3 5
    253
    *Main> ack 3 6
    509
    *Main> ack 3 8
    2045
    *Main> ack 3 9
    4093
    *Main> ack 4 1
-}