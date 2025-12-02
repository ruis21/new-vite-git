// useMemo

// 메모이제이션 
// 동일한 값을 리턴하는 함수를 반복 호출할 때, 이전에 계산된 값을 저장을 해두고, 필요할 때마다 또 다시 계산 하지 않고 메모리에서 꺼내서 재사용하는 기법 
// 더 쉽게 말해 맨처음에 랜더링할 때 캐싱해두고, 그 값이 필요할 때마다 캐시해서 꺼내서 사용함 

import { useState, useMemo } from 'react';

function calculate(num) {
    console.log('연산 진행중...');
    for (let i = 0; i < 1000000000; i++) { }  //복잡한 연산 시뮬레이션
    return num + 10000
}
function calculate02(num) {
    console.log('빠른 연산 진행중...');
    return num + 1
}

function UseMemo() {
    const [number, setNumber] = useState(1);
    const [EzNumber, setEzNumber] = useState(1);

    // const sum = calculate(number);
    // useMemo 사용
    const sum = useMemo(() => {
        return calculate(number)
    }, [number])
    const sum02 = calculate02(EzNumber);


    return (
        <>
            <div>
                <h2>계산기</h2>
                <input
                    type="number"
                    value={EzNumber}
                    onChange={(e) => { setEzNumber(parseInt(e.target.value)) }} //parseInt 문자열을 숫자로 변환
                />
                <span>+ 1 = {sum02}</span>
            </div>
        </>
    )
}

export default UseMemo