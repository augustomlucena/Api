pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Resposta possui JSON", function () {
    pm.response.to.be.json;
});

pm.test("Tempo de resposta menor que 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});