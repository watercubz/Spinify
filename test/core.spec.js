import { expect, jest, test } from '@jest/globals'
import { CustomSpinner } from '../src/core'

test('CustomSpinner starts and stops correctly', async () => {
	jest.useFakeTimers()

	const spinify = new CustomSpinner('dots', 'Loading...')
	spinify.start()

	// Avanzar el tiempo para simular que ha pasado algún tiempo
	jest.advanceTimersByTime(3000)

	await spinify.stop() // Usa await para esperar que se complete cualquier operación asíncrona en stop
	expect(/* ... */).toBe(/* ... */)
})
