import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '30s',

    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<1000'],
    },
};

export default function () {
    const response = http.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    check(response, {
        'Status code é 200': (r) => r.status === 200,
        'Resposta contém usuários': (r) => {
            const users = r.json();
            return users.length > 0;
        },
        'Tempo de resposta < 1000ms': (r) => {
            return r.timings.duration < 1000;
        },
    });

    sleep(1);
}