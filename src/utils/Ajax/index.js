// =========================================
/**
 * Ajax避免浏览器缓存的方法
 * Http请求时，有时浏览器会缓存响应数据，以提高性能。但在某些情况下，你可能希望金庸缓存或控制缓存行为，以确保获得最新得数据。
 */
/**
 * 1.添加时间戳或随机参数
 * 在Ajax请求得url中添加一个时间戳或随机参数，以使每个请求看起来不同，从而防止缓存。
 */
var timestamp = new Date().getTime();
var url = 'data.json?thimestamp=' + timestamp;

/**
 * 2.禁用缓存头信息
 * 可以在请求头中添加 Cache-Control: no-cache 或 Pragram: no-cache, 告诉服务器不使用缓存。
 */
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.setRequestHeader('Cache-Control', 'no-cache');
xhr.send();

/**
 * 3.设置响应头
 * 服务器可以在响应头中设置缓存控制信息，以告诉浏览器不要缓存响应
 */
// Cache-Control: no-caches, no-StorageEvent, must-revalidate
// Program: no-cache
// Expries: 0

/**
 * 4.使用POST请求
 * GET 请求通常更容易背浏览器缓存，而POST请求通常不会被缓存。如果没有特殊需求，可以考虑使用POST
 */
var xhr = new XMLHttpRequest();
xhr.open('POST', 'data.json', true);
xhr.send();

// =========================================
