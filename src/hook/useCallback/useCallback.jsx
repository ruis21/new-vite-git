// usecallback 
// 메모이제이션 역할 
// 특정 함수가 의존성 배열에 명시된 값이 변경될 때만 새로 생성되도록 함.
// 불필요한 함수 재생성 방지 


import { useCallback, useState } from "react"
import Box from "./Box"


function UseCallback() {
    const [size, setSize] = useState(100);

    // 모드전환 
    const [isDark, setIsDark] = useState(false);


    const boxStyle = useCallback(
        () => {
            return {
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: 'blue',
            }
        }, [size]);

    return (

        <div
            style={
                {
                    backgroundColor: isDark ? 'black' : '#f0f0f0',
                    padding: '20px',
                }
            }>

            {/* 모드 전환 버튼 */}
            <button onClick={() => setIsDark(!isDark)}>모드 전환</button>

            <button onClick={() => setSize(size + 10)}>박스 커짐</button>
            <button onClick={() => setSize(size - 10)}>박스 작아짐</button>

            <Box boxStyle={boxStyle} />

        </div>
    )
}

export default UseCallback


// useMemo : 값을 메모함
// useCallback : 함수를 메모함
// 목적에 따라 달리 사용. 함수가 보이게 할건지 결과값이 보이게 할건지에 따른 차이
// 협업 시 다른사람들이 코드를 봤을때 어떤 값을 저장할것인지 